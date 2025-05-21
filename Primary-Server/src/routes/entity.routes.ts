import { Router } from "express";
import {
  authenticateToken,
  authorizeRoles,
} from "../middleware/auth.middleware";
import {
  CandidateController,
  CompanyController,
  JobController,
  ContractController,
  MeetingController,
  SkillController,
} from "../controllers/entity.controllers";

const router = Router();

// Initialize controllers
const candidateController = new CandidateController();
const companyController = new CompanyController();
const jobController = new JobController();
const contractController = new ContractController();
const meetingController = new MeetingController();
const skillController = new SkillController();

// Candidate routes
router.get("/candidates/me", authenticateToken, candidateController.getMe);
router.get("/candidates", authenticateToken, candidateController.getAll);
router.get("/candidates/:id", authenticateToken, candidateController.getById);
router.get(
  "/candidates/:id/skills",
  authenticateToken,
  candidateController.getWithSkills
);
router.post("/candidates", authenticateToken, candidateController.create);
router.put("/candidates/:id", authenticateToken, candidateController.update);
router.delete(
  "/candidates/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  candidateController.delete
);

// Company routes
router.get("/companies", authenticateToken, companyController.getAll);
router.get("/companies/:id", authenticateToken, companyController.getById);
router.get(
  "/companies/:id/jobs",
  authenticateToken,
  companyController.getWithJobs
);
router.post(
  "/companies",
  authenticateToken,
  authorizeRoles("ADMIN"),
  companyController.create
);
router.put(
  "/companies/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  companyController.update
);
router.delete(
  "/companies/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  companyController.delete
);

// Job routes
router.get("/jobs", authenticateToken, jobController.getAll);
router.get("/jobs/:id", authenticateToken, jobController.getById);
router.get("/jobs/:id/skills", authenticateToken, jobController.getWithSkills);
router.post(
  "/jobs",
  authenticateToken,
  authorizeRoles("ADMIN"),
  jobController.create
);
router.put(
  "/jobs/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  jobController.update
);
router.delete(
  "/jobs/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  jobController.delete
);

// Contract routes
router.get("/contracts", authenticateToken, contractController.getAll);
router.get("/contracts/:id", authenticateToken, contractController.getById);
router.get(
  "/contracts/:id/details",
  authenticateToken,
  contractController.getWithDetails
);
router.post(
  "/contracts",
  authenticateToken,
  authorizeRoles("ADMIN"),
  contractController.create
);
router.put(
  "/contracts/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  contractController.update
);
router.delete(
  "/contracts/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  contractController.delete
);

// Meeting routes
router.get("/meetings", authenticateToken, meetingController.getAll);
router.get("/meetings/:id", authenticateToken, meetingController.getById);
router.get(
  "/meetings/:id/details",
  authenticateToken,
  meetingController.getWithDetails
);
router.post(
  "/meetings",
  authenticateToken,
  authorizeRoles("ADMIN"),
  meetingController.create
);
router.put(
  "/meetings/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  meetingController.update
);
router.delete(
  "/meetings/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  meetingController.delete
);

// Skill routes
router.get("/skills", authenticateToken, skillController.getAll);
router.get("/skills/:id", authenticateToken, skillController.getById);
router.post(
  "/skills",
  authenticateToken,
  authorizeRoles("ADMIN"),
  skillController.create
);
router.put(
  "/skills/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  skillController.update
);
router.delete(
  "/skills/:id",
  authenticateToken,
  authorizeRoles("ADMIN"),
  skillController.delete
);

export default router;
