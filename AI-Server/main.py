from fastapi import FastAPI
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import HTMLResponse
import os
import uvicorn

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
        <a href="/api/docs">View API Documentation</a>
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
