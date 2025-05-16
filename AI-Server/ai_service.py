import os
from typing import List, Dict, Any
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
import json

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# Initialize the OpenAI model
model = ChatOpenAI(
    model="gpt-4",
    temperature=0.2,
    api_key=OPENAI_API_KEY
)

# Define job keys - in a real scenario, these would be pulled from the database
DEFAULT_JOB_KEYS = [
    "Software Engineer", 
    "Data Scientist", 
    "Project Manager", 
    "UX Designer", 
    "DevOps Engineer",
    "Product Manager",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Frontend Developer",
    "Backend Developer"
]

class AIService:
    def __init__(self):
        self.model = model
        
    def analyze_linkedin_profile(self, linkedin_data: str, job_keys: List[str] = None) -> Dict[str, Any]:
        """
        Analyze LinkedIn profile data and return job recommendations and insights
        """
        if job_keys is None:
            job_keys = DEFAULT_JOB_KEYS
            
        job_keys_str = ", ".join(job_keys)
        
        system_template = """
        You are an AI career advisor specialized in analyzing LinkedIn profiles and providing job recommendations.
        
        Based on the LinkedIn profile provided, you will:
        1. Identify the candidate's skills, experience, and education
        2. Recommend the top jobs from this list that match their profile: {job_keys}
        3. Provide an overall rank from 1-10 for their profile quality
        4. Suggest specific improvements
        5. Add helpful comments about their strengths and weaknesses
        
        Return the analysis in the following JSON format:
        {{
            "recommended_jobs": [
                {{"title": "Job Title", "rank": 8}}
            ],
            "potential_jobs": ["Job Title 1", "Job Title 2"],
            "comments": "Overall assessment of the profile",
            "improvements": ["Improvement 1", "Improvement 2"],
            "overall_rank": 7
        }}
        
        The recommended_jobs should be ranked from 1-10 based on how well the profile matches that job.
        Only include jobs from the provided list that are truly relevant to the candidate's profile.
        """
        
        human_template = """
        LinkedIn Profile Data:
        {linkedin_data}
        """
        
        prompt = ChatPromptTemplate.from_messages([
            ("system", system_template),
            ("human", human_template)
        ])
        
        chain = prompt | model
        
        response = chain.invoke({
            "job_keys": job_keys_str,
            "linkedin_data": linkedin_data
        })
        
        # Extract the JSON from the response
        try:
            analysis_result = json.loads(response.content)
            return analysis_result
        except json.JSONDecodeError:
            # Fallback in case the model doesn't return proper JSON
            return {
                "recommended_jobs": [],
                "potential_jobs": [],
                "comments": "Failed to analyze profile properly.",
                "improvements": ["Please provide more detailed profile information."],
                "overall_rank": 5
            }


ai_service = AIService() 