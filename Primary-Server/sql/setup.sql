-- The Oracis AI Primary Server MySQL Database Setup Script
-- Muhammad Talal Majeed

-- Create database if not exists
DROP DATABASE IF EXISTS oracis_ai;
CREATE DATABASE IF NOT EXISTS oracis_ai;
USE oracis_ai;

-- Create CANDIDATES table
CREATE TABLE candidates (
    candidate_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    resume_url VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('ACTIVE', 'INACTIVE', 'HIRED', 'REJECTED')
);

-- Create COMPANIES table
CREATE TABLE companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(100) NOT NULL,
    industry VARCHAR(50),
    location VARCHAR(100),
    website VARCHAR(255),
    description TEXT,
    contact_person VARCHAR(100),
    contact_email VARCHAR(100) UNIQUE,
    contact_phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create SKILLS table
CREATE TABLE skills (
    skill_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(100) NOT NULL,
    skill_category VARCHAR(50),
    description VARCHAR(500)
);

-- Create JOBS table
CREATE TABLE jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    company_id INT,
    job_title VARCHAR(100) NOT NULL,
    job_description TEXT,
    location VARCHAR(100),
    job_type ENUM('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP'),
    salary_range VARCHAR(50),
    posting_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    closing_date DATE,
    status ENUM('OPEN', 'CLOSED', 'FILLED', 'CANCELLED'),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Create CONTRACTS table
CREATE TABLE contracts (
    contract_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    candidate_id INT,
    start_date DATE,
    end_date DATE,
    contract_type VARCHAR(50),
    salary DECIMAL(10,2),
    status ENUM('DRAFT', 'SIGNED', 'ACTIVE', 'COMPLETED', 'TERMINATED'),
    documents_url VARCHAR(255),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id)
);

-- Create MEETINGS table
CREATE TABLE meetings (
    meeting_id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id INT,
    job_id INT,
    company_id INT,
    meeting_date DATE,
    meeting_time TIME,
    meeting_type ENUM('PHONE_SCREEN', 'VIDEO_INTERVIEW', 'IN_PERSON', 'TECHNICAL_TEST'),
    location VARCHAR(255),
    notes TEXT,
    status ENUM('SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED'),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Create CANDIDATE_SKILLS junction table
CREATE TABLE candidate_skills (
    candidate_id INT,
    skill_id INT,
    proficiency_level ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'),
    years_experience INT,
    PRIMARY KEY (candidate_id, skill_id),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

-- Create JOB_SKILLS junction table
CREATE TABLE job_skills (
    job_id INT,
    skill_id INT,
    importance ENUM('REQUIRED', 'PREFERRED', 'NICE_TO_HAVE'),
    PRIMARY KEY (job_id, skill_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

-- Commit all changes
COMMIT;