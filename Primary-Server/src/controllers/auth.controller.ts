import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { generateToken } from "../middleware/auth.middleware";
import {
  LoginRequest,
  RegisterCandidateRequest,
  RegisterEmployerRequest,
} from "../types/auth.types";
import { executeQuery } from "../config/database";

export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
) => {
  try {
    const { email, password, userType } = req.body;

    // Determine which table and fields to use based on userType
    const table = userType === "candidate" ? "candidates" : "companies";
    const idField = userType === "candidate" ? "candidate_id" : "company_id";
    const emailField = userType === "candidate" ? "email" : "contact_email";
    const nameField =
      userType === "candidate"
        ? "CONCAT(first_name, ' ', last_name)"
        : "company_name";

    // Query to find user by email
    const result = await executeQuery(
      `SELECT *, ${nameField} as name FROM ${table} WHERE ${emailField} = ?`,
      [email]
    );

    if (!result || result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result[0];
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken({
      userId: user[idField],
      email: user[emailField],
      type: userType,
    });

    res.json({
      token,
      user: {
        id: user[idField].toString(),
        email: user[emailField],
        name: user.name,
        type: userType,
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
      "SELECT * FROM candidates WHERE email = ?",
      [email]
    );

    if (existingUser && existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new candidate
    const result = await executeQuery(
      `INSERT INTO candidates (first_name, last_name, email, phone, password, status)
             VALUES (?, ?, ?, ?, ?, 'ACTIVE')`,
      [first_name, last_name, email, phone, hashedPassword]
    );

    const insertId = (result as any).insertId;
    const token = generateToken({
      userId: insertId,
      email,
      type: "candidate",
    });

    res.status(201).json({
      token,
      user: {
        id: insertId.toString(),
        email,
        name: `${first_name} ${last_name}`,
        type: "candidate",
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const registerEmployer = async (
  req: Request<{}, {}, RegisterEmployerRequest>,
  res: Response
) => {
  try {
    const {
      company_name,
      industry,
      location,
      website,
      description,
      contact_person,
      contact_email,
      contact_phone,
      password,
    } = req.body;

    // Check if email already exists
    const existingUser = await executeQuery(
      "SELECT * FROM companies WHERE contact_email = ?",
      [contact_email]
    );

    if (existingUser && existingUser.length > 0) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new company
    const result = await executeQuery(
      `INSERT INTO companies (
        company_name, industry, location, website, description,
        contact_person, contact_email, contact_phone, password
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        company_name,
        industry,
        location,
        website,
        description,
        contact_person,
        contact_email,
        contact_phone,
        hashedPassword,
      ]
    );

    const insertId = (result as any).insertId;
    const token = generateToken({
      userId: insertId,
      email: contact_email,
      type: "employer",
    });

    res.status(201).json({
      token,
      user: {
        id: insertId.toString(),
        email: contact_email,
        name: company_name,
        type: "employer",
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
