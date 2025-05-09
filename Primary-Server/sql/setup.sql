-- The Oracis AI Primary Server Oracle Database Setup Script
-- Muhammad Talal Majeed

-- Connect as system administrator
CONNECT sys/your_password@//localhost:1521/XEPDB1 AS SYSDBA;

-- Cleanup existing objects
BEGIN
    -- Drop existing users
    FOR user_rec IN (SELECT username FROM dba_users WHERE username IN ('ADMIN_USER', 'VIEWER_USER', 'APP_USER')) LOOP
        EXECUTE IMMEDIATE 'DROP USER ' || user_rec.username || ' CASCADE';
    END LOOP;

    -- Drop existing roles
    FOR role_rec IN (SELECT role FROM dba_roles WHERE role IN ('DB_ADMINISTRATOR', 'DB_VIEWER', 'DB_APPLICATION')) LOOP
        EXECUTE IMMEDIATE 'DROP ROLE ' || role_rec.role;
    END LOOP;
END;
/

-- Create roles for different user types
CREATE ROLE db_administrator;
CREATE ROLE db_viewer;
CREATE ROLE db_application;

-- Grant privileges to administrator role
GRANT CONNECT, RESOURCE, CREATE VIEW, CREATE PROCEDURE, CREATE TRIGGER TO db_administrator;
GRANT CREATE TABLE, ALTER ANY TABLE, DROP ANY TABLE TO db_administrator;
GRANT CREATE SEQUENCE, CREATE ANY INDEX TO db_administrator;
GRANT SELECT ANY TABLE, INSERT ANY TABLE, UPDATE ANY TABLE, DELETE ANY TABLE TO db_administrator;

-- Grant privileges to viewer role
GRANT CONNECT TO db_viewer;
GRANT SELECT ANY TABLE TO db_viewer;

-- Grant privileges to application role
GRANT CONNECT, RESOURCE TO db_application;
GRANT CREATE SESSION TO db_application;

-- Create users and assign roles
CREATE USER admin_user IDENTIFIED BY "Admin_Password1";
CREATE USER viewer_user IDENTIFIED BY "Viewer_Password1";
CREATE USER app_user IDENTIFIED BY "App_Password1";

-- Assign roles to users
GRANT db_administrator TO admin_user;
GRANT db_viewer TO viewer_user;
GRANT db_application TO app_user;

-- Grant quota on tablespace to allow users to create objects
ALTER USER admin_user QUOTA UNLIMITED ON USERS;
ALTER USER app_user QUOTA UNLIMITED ON USERS;

-- Connect as admin user to create tables
CONNECT admin_user/Admin_Password1@//localhost:1521/XEPDB1;

-- Create sequences for auto-incrementing IDs
CREATE SEQUENCE candidate_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE company_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE skill_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE job_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE contract_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE meeting_seq START WITH 1 INCREMENT BY 1;

-- Create CANDIDATES table
CREATE TABLE candidates (
    candidate_id NUMBER PRIMARY KEY,
    first_name VARCHAR2(50) NOT NULL,
    last_name VARCHAR2(50) NOT NULL,
    email VARCHAR2(100) UNIQUE,
    phone VARCHAR2(20),
    resume_url VARCHAR2(255),
    registration_date DATE DEFAULT SYSDATE,
    status VARCHAR2(20) CHECK (status IN ('ACTIVE', 'INACTIVE', 'HIRED', 'REJECTED'))
);

-- Create COMPANIES table
CREATE TABLE companies (
    company_id NUMBER PRIMARY KEY,
    company_name VARCHAR2(100) NOT NULL,
    industry VARCHAR2(50),
    location VARCHAR2(100),
    website VARCHAR2(255),
    description VARCHAR2(2000),
    contact_person VARCHAR2(100),
    contact_email VARCHAR2(100),
    contact_phone VARCHAR2(20),
    registration_date DATE DEFAULT SYSDATE
);

-- Create SKILLS table
CREATE TABLE skills (
    skill_id NUMBER PRIMARY KEY,
    skill_name VARCHAR2(100) NOT NULL,
    skill_category VARCHAR2(50),
    description VARCHAR2(500)
);

-- Create JOBS table
CREATE TABLE jobs (
    job_id NUMBER PRIMARY KEY,
    company_id NUMBER,
    job_title VARCHAR2(100) NOT NULL,
    job_description VARCHAR2(4000),
    location VARCHAR2(100),
    job_type VARCHAR2(50) CHECK (job_type IN ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERNSHIP')),
    salary_range VARCHAR2(50),
    posting_date DATE DEFAULT SYSDATE,
    closing_date DATE,
    status VARCHAR2(20) CHECK (status IN ('OPEN', 'CLOSED', 'FILLED', 'CANCELLED')),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Create CONTRACTS table
CREATE TABLE contracts (
    contract_id NUMBER PRIMARY KEY,
    job_id NUMBER,
    candidate_id NUMBER,
    start_date DATE,
    end_date DATE,
    contract_type VARCHAR2(50),
    salary NUMBER,
    status VARCHAR2(20) CHECK (status IN ('DRAFT', 'SIGNED', 'ACTIVE', 'COMPLETED', 'TERMINATED')),
    documents_url VARCHAR2(255),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id)
);

-- Create MEETINGS table
CREATE TABLE meetings (
    meeting_id NUMBER PRIMARY KEY,
    candidate_id NUMBER,
    job_id NUMBER,
    company_id NUMBER,
    meeting_date DATE,
    meeting_time VARCHAR2(10),
    meeting_type VARCHAR2(50) CHECK (meeting_type IN ('PHONE_SCREEN', 'VIDEO_INTERVIEW', 'IN_PERSON', 'TECHNICAL_TEST')),
    location VARCHAR2(255),
    notes VARCHAR2(1000),
    status VARCHAR2(20) CHECK (status IN ('SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED')),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

-- Create CANDIDATE_SKILLS junction table
CREATE TABLE candidate_skills (
    candidate_id NUMBER,
    skill_id NUMBER,
    proficiency_level VARCHAR2(20) CHECK (proficiency_level IN ('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT')),
    years_experience NUMBER,
    PRIMARY KEY (candidate_id, skill_id),
    FOREIGN KEY (candidate_id) REFERENCES candidates(candidate_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

-- Create JOB_SKILLS junction table
CREATE TABLE job_skills (
    job_id NUMBER,
    skill_id NUMBER,
    importance VARCHAR2(20) CHECK (importance IN ('REQUIRED', 'PREFERRED', 'NICE_TO_HAVE')),
    PRIMARY KEY (job_id, skill_id),
    FOREIGN KEY (job_id) REFERENCES jobs(job_id),
    FOREIGN KEY (skill_id) REFERENCES skills(skill_id)
);

-- Create triggers for auto-incrementing IDs
CREATE OR REPLACE TRIGGER candidate_trg
BEFORE INSERT ON candidates
FOR EACH ROW
BEGIN
    SELECT candidate_seq.NEXTVAL INTO :NEW.candidate_id FROM dual;
END;
/

CREATE OR REPLACE TRIGGER company_trg
BEFORE INSERT ON companies
FOR EACH ROW
BEGIN
    SELECT company_seq.NEXTVAL INTO :NEW.company_id FROM dual;
END;
/

CREATE OR REPLACE TRIGGER skill_trg
BEFORE INSERT ON skills
FOR EACH ROW
BEGIN
    SELECT skill_seq.NEXTVAL INTO :NEW.skill_id FROM dual;
END;
/

CREATE OR REPLACE TRIGGER job_trg
BEFORE INSERT ON jobs
FOR EACH ROW
BEGIN
    SELECT job_seq.NEXTVAL INTO :NEW.job_id FROM dual;
END;
/

CREATE OR REPLACE TRIGGER contract_trg
BEFORE INSERT ON contracts
FOR EACH ROW
BEGIN
    SELECT contract_seq.NEXTVAL INTO :NEW.contract_id FROM dual;
END;
/

CREATE OR REPLACE TRIGGER meeting_trg
BEFORE INSERT ON meetings
FOR EACH ROW
BEGIN
    SELECT meeting_seq.NEXTVAL INTO :NEW.meeting_id FROM dual;
END;
/

-- Grant access to tables for different roles
GRANT ALL ON candidates TO db_administrator;
GRANT ALL ON companies TO db_administrator;
GRANT ALL ON skills TO db_administrator;
GRANT ALL ON candidate_skills TO db_administrator;
GRANT ALL ON jobs TO db_administrator;
GRANT ALL ON job_skills TO db_administrator;
GRANT ALL ON contracts TO db_administrator;
GRANT ALL ON meetings TO db_administrator;

GRANT SELECT ON candidates TO db_viewer;
GRANT SELECT ON companies TO db_viewer;
GRANT SELECT ON skills TO db_viewer;
GRANT SELECT ON candidate_skills TO db_viewer;
GRANT SELECT ON jobs TO db_viewer;
GRANT SELECT ON job_skills TO db_viewer;
GRANT SELECT ON contracts TO db_viewer;
GRANT SELECT ON meetings TO db_viewer;

GRANT SELECT, INSERT, UPDATE ON candidates TO db_application;
GRANT SELECT, INSERT, UPDATE ON companies TO db_application;
GRANT SELECT, INSERT, UPDATE ON skills TO db_application;
GRANT SELECT, INSERT, UPDATE ON candidate_skills TO db_application;
GRANT SELECT, INSERT, UPDATE ON jobs TO db_application;
GRANT SELECT, INSERT, UPDATE ON job_skills TO db_application;
GRANT SELECT, INSERT, UPDATE ON contracts TO db_application;
GRANT SELECT, INSERT, UPDATE ON meetings TO db_application;

-- Insert sample data
INSERT INTO candidates (first_name, last_name, email, phone, status)
VALUES ('John', 'Smith', 'john.smith@email.com', '555-123-4567', 'ACTIVE');

INSERT INTO candidates (first_name, last_name, email, phone, status)
VALUES ('Emily', 'Johnson', 'emily.johnson@email.com', '555-987-6543', 'ACTIVE');

INSERT INTO companies (company_name, industry, location, website)
VALUES ('Tech Solutions Inc', 'Information Technology', 'New York, NY', 'www.techsolutions.com');

INSERT INTO companies (company_name, industry, location, website)
VALUES ('Global Finance', 'Banking', 'Chicago, IL', 'www.globalfinance.com');

INSERT INTO skills (skill_name, skill_category)
VALUES ('Java', 'Programming');

INSERT INTO skills (skill_name, skill_category)
VALUES ('SQL', 'Database');

INSERT INTO skills (skill_name, skill_category)
VALUES ('Project Management', 'Management');

INSERT INTO jobs (company_id, job_title, job_description, location, job_type, status)
VALUES (1, 'Senior Java Developer', 'Experienced Java developer needed for enterprise applications', 'New York, NY', 'FULL_TIME', 'OPEN');

INSERT INTO jobs (company_id, job_title, job_description, location, job_type, status)
VALUES (2, 'Database Administrator', 'Managing and optimizing database systems', 'Chicago, IL', 'FULL_TIME', 'OPEN');

INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_experience)
VALUES (1, 1, 'ADVANCED', 5);

INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_experience)
VALUES (1, 2, 'INTERMEDIATE', 3);

INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_experience)
VALUES (2, 2, 'EXPERT', 7);

INSERT INTO candidate_skills (candidate_id, skill_id, proficiency_level, years_experience)
VALUES (2, 3, 'ADVANCED', 4);

INSERT INTO job_skills (job_id, skill_id, importance)
VALUES (1, 1, 'REQUIRED');

INSERT INTO job_skills (job_id, skill_id, importance)
VALUES (1, 2, 'PREFERRED');

INSERT INTO job_skills (job_id, skill_id, importance)
VALUES (2, 2, 'REQUIRED');

INSERT INTO meetings (candidate_id, job_id, company_id, meeting_date, meeting_type, status)
VALUES (1, 1, 1, SYSDATE+7, 'VIDEO_INTERVIEW', 'SCHEDULED');

-- Commit all changes
COMMIT;

-- Quick verification query
SELECT table_name FROM user_tables;

-- Test queries for each user type
-- Still connected as admin_user
SELECT COUNT(*) FROM candidates;
SELECT COUNT(*) FROM companies;
SELECT COUNT(*) FROM skills;
SELECT COUNT(*) FROM jobs;
SELECT COUNT(*) FROM contracts;
SELECT COUNT(*) FROM meetings;

-- Connect as viewer user to test privileges
CONNECT viewer_user/Viewer_Password1@//localhost:1521/XEPDB1;
SELECT * FROM candidates;

-- Connect as application user to test privileges
CONNECT app_user/App_Password1@//localhost:1521/XEPDB1;
SELECT * FROM candidates;

-- Reconnect as system admin to verify everything
CONNECT sys/your_password@//localhost:1521/XEPDB1 AS SYSDBA;

-- Show all users and their roles
SELECT username FROM dba_users WHERE username IN ('ADMIN_USER', 'VIEWER_USER', 'APP_USER');
SELECT grantee, granted_role FROM dba_role_privs WHERE grantee IN ('ADMIN_USER', 'VIEWER_USER', 'APP_USER');

-- Show all tables created
SELECT owner, table_name FROM dba_tables WHERE owner IN ('ADMIN_USER');

-- Script completed successfully