# Oracis AI - Secondary AI Server

This FastAPI application provides LinkedIn profile analysis and job matching services.

## Features

- LinkedIn profile analysis and job recommendation
- User-to-job and job-to-user ranking
- Integration with MongoDB
- AI-powered analysis using OpenAI and LangChain

## Setup

1. Clone the repository
2. Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the dependencies:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file (copy from example.env):

```bash
cp example.env .env
```

5. Update the `.env` file with your OpenAI API key and MongoDB connection string

6. Start the server:

```bash
python main.py
```

The server will start at http://localhost:5000 by default.

## API Endpoints

- `GET /` - Basic information
- `POST /decode` - Analyze LinkedIn profile data
- `GET /rank/user/{user_id}` - Get best job matches for a user
- `GET /rank/job/{job_id}` - Get top 3 candidates for a job

## API Documentation

Access the API documentation at http://localhost:5000/api/docs

## MongoDB Schema

The application uses the following MongoDB schema:

```javascript
// RecommendedJobSchema
{
  title: String,   // required
  rank: Number     // required
}

// LinkedInAnalysisSchema
{
  userId: String,  // required, reference to User
  recommended_jobs: [RecommendedJobSchema],
  potential_jobs: [String],
  comments: String,
  improvements: [String],
  overall_rank: Number,  // required, min: 0
  createdAt: Date    // default: current date
}
```

## Environment Variables

- `MONGO_URI` - MongoDB connection string
- `OPENAI_API_KEY` - OpenAI API key
- `SERVER_PORT` - Port to run the server on (default: 5000)
