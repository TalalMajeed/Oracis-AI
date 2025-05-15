import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post("/api/auth/login", {
      email,
      password,
    });
    return response.data;
  },
  registerCandidate: async (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
  }) => {
    const response = await apiClient.post("/api/auth/register/candidate", data);
    return response.data;
  },
};

// Candidates API
export const candidatesAPI = {
  getAll: async () => {
    const response = await apiClient.get("/api/candidates");
    return response.data;
  },
  getById: async (id: number) => {
    const response = await apiClient.get(`/api/candidates/${id}`);
    return response.data;
  },
  getSkills: async (id: number) => {
    const response = await apiClient.get(`/api/candidates/${id}/skills`);
    return response.data;
  },
  create: async (data: {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    resume_url: string;
    status: string;
  }) => {
    const response = await apiClient.post("/api/candidates", data);
    return response.data;
  },
};

// Companies API
export const companiesAPI = {
  getAll: async () => {
    const response = await apiClient.get("/api/companies");
    return response.data;
  },
  getJobs: async (id: number) => {
    const response = await apiClient.get(`/api/companies/${id}/jobs`);
    return response.data;
  },
};

// Jobs API
export const jobsAPI = {
  getAll: async () => {
    const response = await apiClient.get("/api/jobs");
    return response.data;
  },
  getSkills: async (id: number) => {
    const response = await apiClient.get(`/api/jobs/${id}/skills`);
    return response.data;
  },
  create: async (data: {
    company_id: number;
    job_title: string;
    job_description: string;
    location: string;
    job_type: string;
    salary_range: string;
    status: string;
  }) => {
    const response = await apiClient.post("/api/jobs", data);
    return response.data;
  },
};

// Contracts API
export const contractsAPI = {
  getDetails: async (id: number) => {
    const response = await apiClient.get(`/api/contracts/${id}/details`);
    return response.data;
  },
};

// Meetings API
export const meetingsAPI = {
  getDetails: async (id: number) => {
    const response = await apiClient.get(`/api/meetings/${id}/details`);
    return response.data;
  },
  create: async (data: {
    candidate_id: number;
    job_id: number;
    company_id: number;
    meeting_date: string;
    meeting_time: string;
    meeting_type: string;
    location: string;
    notes: string;
    status: string;
  }) => {
    const response = await apiClient.post("/api/meetings", data);
    return response.data;
  },
};

// Skills API
export const skillsAPI = {
  getAll: async () => {
    const response = await apiClient.get("/api/skills");
    return response.data;
  },
  create: async (data: {
    skill_name: string;
    skill_category: string;
    description: string;
  }) => {
    const response = await apiClient.post("/api/skills", data);
    return response.data;
  },
};

export default apiClient;
