import { Router } from "express";
import {
  login,
  registerCandidate,
  registerEmployer,
} from "../controllers/auth.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/login", login);
router.post("/register/candidate", registerCandidate);
router.post("/register/employer", registerEmployer);

// Protected routes
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

export default router;
