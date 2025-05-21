from fastapi import FastAPI, HTTPException, Path
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import HTMLResponse
import os
import uvicorn

from database import db
from ai_service import ai_service
from models import AnalysisRequest, LinkedInAnalysis, RankResponse

app = FastAPI(
    title="Oracis AI - AI Server",
    description="API Documentation for Oracis AI",
    version="1.0.0",
    docs_url=None,
    redoc_url=None
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", response_class=HTMLResponse)
def root():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Oracis AI | AI Server</title>
        <meta charset="utf-8">
    </head>
    <body style="font-family: Arial, sans-serif;">
        <h1>Oracis AI - AI Server</h1>
        <p>Version: 1.0.0 (Beta Testing)</p>
        <p>This API server provides LinkedIn profile analysis and job matching services.</p>
    </body>
    </html>
    """

@app.get("/api/docs", response_class=HTMLResponse)
def get_docs():
    return get_swagger_ui_html(
        openapi_url="/openapi.json",
        title="Oracis AI - API Docs",
        swagger_favicon_url="https://oracis.ai/favicon.ico",
        swagger_ui_parameters={
            "displayRequestDuration": True,
            "defaultModelsExpandDepth": -1,
            "docExpansion": "none",
        }
    )

@app.post("/decode")
async def decode(request: AnalysisRequest):
    """
    Takes unstructured LinkedIn data string and a candidate ID to perform analysis.
    
    Analyzes the LinkedIn profile, recommends jobs, and saves results to the database.
    """
    try:
        # Get job keys from database, fallback to default ones if empty
        job_keys_docs = db.get_job_keys()
        job_keys = [doc.get("key") for doc in job_keys_docs] if job_keys_docs else None
        
        # Analyze the LinkedIn profile
        analysis_result = ai_service.analyze_linkedin_profile(request.linkedin_data, job_keys)
        
        # Prepare data for database
        linkedin_analysis = {
            "userId": request.candidate_id,
            "recommended_jobs": analysis_result.get("recommended_jobs", []),
            "potential_jobs": analysis_result.get("potential_jobs", []),
            "comments": analysis_result.get("comments", ""),
            "improvements": analysis_result.get("improvements", []),
            "overall_rank": analysis_result.get("overall_rank", 5)
        }
        
        # Save to database
        db.insert_analysis(linkedin_analysis)
        
        return linkedin_analysis
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing profile: {str(e)}")

@app.get("/rank/user/{user_id}", response_model=RankResponse)
async def get_user_ranking(user_id: str = Path(..., description="The ID of the user")):
    """
    Returns the best job keys for the specified user
    """
    try:
        rankings = db.get_top_jobs_by_user(user_id)
        return {"rankings": rankings}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving user rankings: {str(e)}")

@app.get("/rank/job/{job_id}", response_model=RankResponse)
async def get_job_ranking(job_id: str = Path(..., description="The job title/ID to find candidates for")):
    """
    Returns the top 3 candidate IDs for the specified job
    """
    try:
        rankings = db.get_top_candidates_for_job(job_id, limit=3)
        return {"rankings": rankings}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving job rankings: {str(e)}")

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Oracis AI - AI Server",
        version="1.0.0",
        description="API Documentation for Oracis AI",
        routes=app.routes,
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

if __name__ == "__main__":
    port = int(os.getenv("SERVER_PORT", 5000))
    uvicorn.run(app, host="0.0.0.0", port=port)
