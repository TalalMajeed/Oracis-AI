#!/usr/bin/env python3
"""
Utility script to populate the job_keys collection with common job titles.
Run this script after setting up the MongoDB connection.
"""

import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")

# List of common tech job titles
JOB_KEYS = [
    "Software Engineer",
    "Data Scientist",
    "Project Manager",
    "UX Designer",
    "DevOps Engineer",
    "Product Manager",
    "Full Stack Developer",
    "Machine Learning Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Cloud Engineer",
    "Data Engineer",
    "QA Engineer",
    "Technical Writer",
    "Solutions Architect",
    "Security Engineer",
    "Mobile Developer",
    "Database Administrator",
    "AI Research Scientist",
    "Technical Support Engineer"
]

def populate_job_keys():
    """Populate the job_keys collection with default job titles"""
    print("Connecting to MongoDB...")
    client = MongoClient(MONGO_URI)
    db = client["oracis-secondary"]
    collection = db["job_keys"]
    
    # Check if collection already has data
    existing_count = collection.count_documents({})
    if existing_count > 0:
        print(f"Collection already has {existing_count} job keys.")
        choice = input("Do you want to clear and repopulate? (y/n): ")
        if choice.lower() == 'y':
            collection.delete_many({})
        else:
            print("Aborted. No changes made.")
            return
    
    # Insert job keys
    print("Populating job keys collection...")
    job_key_docs = [{"key": key} for key in JOB_KEYS]
    result = collection.insert_many(job_key_docs)
    
    print(f"Successfully inserted {len(result.inserted_ids)} job keys.")

if __name__ == "__main__":
    populate_job_keys() 