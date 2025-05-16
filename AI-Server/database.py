from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")


class Database:
    def __init__(self):
        self.client = MongoClient(MONGO_URI)
        self.db = self.client["oracis-secondary"]
        self.linkedin_analysis = self.db["linkedin_analysis"]
        self.job_keys = self.db["job_keys"]

    def insert_analysis(self, analysis_data):
        return self.linkedin_analysis.insert_one(analysis_data)

    def get_top_jobs_by_user(self, user_id):
        analysis = self.linkedin_analysis.find_one({"userId": user_id})
        if not analysis:
            return []
        
        # Sort recommended jobs by rank in descending order
        recommended_jobs = sorted(
            analysis.get("recommended_jobs", []), 
            key=lambda x: x.get("rank", 0), 
            reverse=True
        )
        
        # Extract job titles
        return [job.get("title") for job in recommended_jobs]

    def get_top_candidates_for_job(self, job_title, limit=3):
        # Find all analyses with this job title in recommended_jobs
        pipeline = [
            {"$match": {"recommended_jobs.title": job_title}},
            {"$unwind": "$recommended_jobs"},
            {"$match": {"recommended_jobs.title": job_title}},
            {"$sort": {"recommended_jobs.rank": -1}},
            {"$limit": limit},
            {"$project": {"userId": 1, "_id": 0}}
        ]
        
        results = list(self.linkedin_analysis.aggregate(pipeline))
        return [result.get("userId") for result in results]

    def get_job_keys(self):
        return list(self.job_keys.find({}, {"_id": 0, "key": 1}))


db = Database() 