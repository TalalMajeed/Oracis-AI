from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class RecommendedJob(BaseModel):
    title: str
    rank: int


class LinkedInAnalysis(BaseModel):
    userId: str
    recommended_jobs: List[RecommendedJob] = []
    potential_jobs: List[str] = []
    comments: str = ""
    improvements: List[str] = []
    overall_rank: int
    createdAt: datetime = Field(default_factory=datetime.now)


class AnalysisRequest(BaseModel):
    candidate_id: str
    linkedin_data: str


class RankResponse(BaseModel):
    rankings: List[str] 