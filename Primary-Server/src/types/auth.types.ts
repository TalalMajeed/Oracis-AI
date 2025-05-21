export interface UserPayload {
  userId: number;
  email: string;
  type: "candidate" | "employer";
}

export interface LoginRequest {
  email: string;
  password: string;
  userType: "candidate" | "employer";
}

export interface RegisterCandidateRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterEmployerRequest {
  company_name: string;
  industry: string;
  location: string;
  website: string;
  description: string;
  contact_person: string;
  contact_email: string;
  contact_phone: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    role: string;
  };
}
