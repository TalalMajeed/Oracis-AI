import express from "express";
import { executeQuery } from "../config/database";

const router = express.Router();

// Get CV for the authenticated candidate
router.get("/", async (req, res) => {
  try {
    const rows = await executeQuery(
      "SELECT * FROM cvs WHERE candidate_id = ?",
      [1] // Temporarily use ID 1 for testing
    );
    res.json(rows[0] || null);
  } catch (error) {
    console.error("Error fetching CV:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create or update CV for the authenticated candidate
router.post("/", async (req, res) => {
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
    const existing = await executeQuery(
      "SELECT cv_id FROM cvs WHERE candidate_id = ?",
      [1] // Temporarily use ID 1 for testing
    );

    if (existing && existing.length > 0) {
      // Update existing CV
      await executeQuery(
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
          1, // Temporarily use ID 1 for testing
        ]
      );
      res.json({ message: "CV updated successfully" });
    } else {
      // Create new CV
      await executeQuery(
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
          1, // Temporarily use ID 1 for testing
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
