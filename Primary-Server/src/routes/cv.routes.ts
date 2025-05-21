import express from "express";
import { authenticateToken } from "../middleware/auth";
import { pool } from "../config/database";

const router = express.Router();

// Get CV for the authenticated candidate
router.get("/", authenticateToken, async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM cvs WHERE candidate_id = ?",
      [req.user.id]
    );
    res.json(rows[0] || null);
  } catch (error) {
    console.error("Error fetching CV:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create or update CV for the authenticated candidate
router.post("/", authenticateToken, async (req, res) => {
  try {
    const {
      personal_info,
      professional_summary,
      work_experience,
      education,
      skills,
      languages,
    } = req.body;

    // Check if CV exists
    const [existing] = await pool.query(
      "SELECT cv_id FROM cvs WHERE candidate_id = ?",
      [req.user.id]
    );

    if (existing.length > 0) {
      // Update existing CV
      await pool.query(
        `UPDATE cvs SET 
          personal_info = ?,
          professional_summary = ?,
          work_experience = ?,
          education = ?,
          skills = ?,
          languages = ?
        WHERE candidate_id = ?`,
        [
          JSON.stringify(personal_info),
          professional_summary,
          JSON.stringify(work_experience),
          JSON.stringify(education),
          JSON.stringify(skills),
          JSON.stringify(languages),
          req.user.id,
        ]
      );
      res.json({ message: "CV updated successfully" });
    } else {
      // Create new CV
      await pool.query(
        `INSERT INTO cvs (
          candidate_id,
          personal_info,
          professional_summary,
          work_experience,
          education,
          skills,
          languages
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          req.user.id,
          JSON.stringify(personal_info),
          professional_summary,
          JSON.stringify(work_experience),
          JSON.stringify(education),
          JSON.stringify(skills),
          JSON.stringify(languages),
        ]
      );
      res.json({ message: "CV created successfully" });
    }
  } catch (error) {
    console.error("Error saving CV:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
