import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.middleware";
import { LoginRequest, RegisterCandidateRequest } from "../types/auth.types";
import { executeQuery } from "../config/database";
import oracledb from "oracledb";

export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
) => {
  try {
    const { email, password } = req.body;

    // Query to find user by email
    const result = await executeQuery(
      "SELECT * FROM candidates WHERE email = :email",
      { email }
    );

    if (!result.rows || result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];
    const validPassword = await bcrypt.compare(password, user.PASSWORD);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken({
      userId: user.CANDIDATE_ID,
      email: user.EMAIL,
      role: "CANDIDATE",
    });

    res.json({
      token,
      user: {
        id: user.CANDIDATE_ID,
        email: user.EMAIL,
        role: "CANDIDATE",
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const registerCandidate = async (
  req: Request<{}, {}, RegisterCandidateRequest>,
  res: Response
) => {
  try {
    const { first_name, last_name, email, password, phone } = req.body;

    // Check if email already exists
    const existingUser = await executeQuery(
      "SELECT * FROM candidates WHERE email = :email",
      { email }
    );

    if (existingUser.rows && existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new candidate
    const result = await executeQuery(
      `INSERT INTO candidates (first_name, last_name, email, phone, password, status)
             VALUES (:first_name, :last_name, :email, :phone, :password, 'ACTIVE')
             RETURNING candidate_id INTO :id`,
      {
        first_name,
        last_name,
        email,
        phone,
        password: hashedPassword,
        id: { dir: oracledb.BIND_OUT, type: oracledb.NUMBER },
      }
    );

    const token = generateToken({
      userId: result.outBinds.id[0],
      email,
      role: "CANDIDATE",
    });

    res.status(201).json({
      token,
      user: {
        id: result.outBinds.id[0],
        email,
        role: "CANDIDATE",
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
