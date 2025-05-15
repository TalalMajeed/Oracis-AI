export interface Candidate {
  candidate_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  resume_url?: string;
  registration_date?: Date;
  status: "ACTIVE" | "INACTIVE" | "HIRED" | "REJECTED";
}

export interface Company {
  company_id?: number;
  company_name: string;
  industry?: string;
  location?: string;
  website?: string;
  description?: string;
  contact_person?: string;
  contact_email?: string;
  contact_phone?: string;
  registration_date?: Date;
}

export interface Skill {
  skill_id?: number;
  skill_name: string;
  skill_category?: string;
  description?: string;
}

export interface Job {
  job_id?: number;
  company_id: number;
  job_title: string;
  job_description?: string;
  location?: string;
  job_type: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  salary_range?: string;
  posting_date?: Date;
  closing_date?: Date;
  status: "OPEN" | "CLOSED" | "FILLED" | "CANCELLED";
}

export interface Contract {
  contract_id?: number;
  job_id: number;
  candidate_id: number;
  start_date: Date;
  end_date?: Date;
  contract_type: string;
  salary?: number;
  status: "DRAFT" | "SIGNED" | "ACTIVE" | "COMPLETED" | "TERMINATED";
  documents_url?: string;
}

export interface Meeting {
  meeting_id?: number;
  candidate_id: number;
  job_id: number;
  company_id: number;
  meeting_date: Date;
  meeting_time: string;
  meeting_type:
    | "PHONE_SCREEN"
    | "VIDEO_INTERVIEW"
    | "IN_PERSON"
    | "TECHNICAL_TEST";
  location?: string;
  notes?: string;
  status: "SCHEDULED" | "COMPLETED" | "CANCELLED" | "RESCHEDULED";
}

export interface CandidateSkill {
  candidate_id: number;
  skill_id: number;
  proficiency_level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "EXPERT";
  years_experience?: number;
}

export interface JobSkill {
  job_id: number;
  skill_id: number;
  importance: "REQUIRED" | "PREFERRED" | "NICE_TO_HAVE";
}
