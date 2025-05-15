import { Router } from "express";
import { login, registerCandidate } from "../controllers/auth.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

// Public routes
router.post("/login", login);
router.post("/register/candidate", registerCandidate);

// Protected routes example
router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: req.user,
  });
});

export default router;
