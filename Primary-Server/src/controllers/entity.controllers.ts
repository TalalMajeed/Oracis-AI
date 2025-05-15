import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import { executeQuery } from "../config/database";

// Candidate Controller
export class CandidateController extends BaseController {
  constructor() {
    super("candidates", "candidate_id");
  }

  // Get candidate with skills
  getWithSkills = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT c.*, cs.skill_id, s.skill_name, cs.proficiency_level, cs.years_experience
                 FROM candidates c
                 LEFT JOIN candidate_skills cs ON c.candidate_id = cs.candidate_id
                 LEFT JOIN skills s ON cs.skill_id = s.skill_id
                 WHERE c.candidate_id = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Candidate not found" });
      }

      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching candidate with skills:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

// Company Controller
export class CompanyController extends BaseController {
  constructor() {
    super("companies", "company_id");
  }

  // Get company with jobs
  getWithJobs = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT c.*, j.*
                 FROM companies c
                 LEFT JOIN jobs j ON c.company_id = j.company_id
                 WHERE c.company_id = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Company not found" });
      }

      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching company with jobs:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

// Job Controller
export class JobController extends BaseController {
  constructor() {
    super("jobs", "job_id");
  }

  // Get job with required skills
  getWithSkills = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT j.*, js.skill_id, s.skill_name, js.importance
                 FROM jobs j
                 LEFT JOIN job_skills js ON j.job_id = js.job_id
                 LEFT JOIN skills s ON js.skill_id = s.skill_id
                 WHERE j.job_id = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Job not found" });
      }

      res.json(result.rows);
    } catch (error) {
      console.error("Error fetching job with skills:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

// Contract Controller
export class ContractController extends BaseController {
  constructor() {
    super("contracts", "contract_id");
  }

  // Get contract with candidate and job details
  getWithDetails = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT c.*, ca.first_name, ca.last_name, ca.email,
                        j.job_title, co.company_name
                 FROM contracts c
                 JOIN candidates ca ON c.candidate_id = ca.candidate_id
                 JOIN jobs j ON c.job_id = j.job_id
                 JOIN companies co ON j.company_id = co.company_id
                 WHERE c.contract_id = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Contract not found" });
      }

      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error fetching contract details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

// Meeting Controller
export class MeetingController extends BaseController {
  constructor() {
    super("meetings", "meeting_id");
  }

  // Get meeting with all related details
  getWithDetails = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await executeQuery(
        `SELECT m.*, c.first_name, c.last_name, c.email,
                        j.job_title, co.company_name
                 FROM meetings m
                 JOIN candidates c ON m.candidate_id = c.candidate_id
                 JOIN jobs j ON m.job_id = j.job_id
                 JOIN companies co ON m.company_id = co.company_id
                 WHERE m.meeting_id = :id`,
        { id }
      );

      if (!result.rows || result.rows.length === 0) {
        return res.status(404).json({ message: "Meeting not found" });
      }

      res.json(result.rows[0]);
    } catch (error) {
      console.error("Error fetching meeting details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

// Skill Controller
export class SkillController extends BaseController {
  constructor() {
    super("skills", "skill_id");
  }
}
