import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

// Database connection configuration
const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_NAME || "oracis_ai",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Create connection pool
let pool: mysql.Pool;

// Execute query helper function
export const executeQuery = async <T = any>(
  sql: string,
  params: any = {}
): Promise<T[]> => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute(sql, params);
    return rows as T[];
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (error) {
        console.error("Error releasing connection:", error);
      }
    }
  }
};

// Initialize database connection
export const initializeDatabase = async () => {
  try {
    // First create a pool without database selected
    const { database, ...initialConfig } = dbConfig;
    pool = mysql.createPool(initialConfig);

    // Check if database exists
    const connection = await pool.getConnection();
    const [databases] = await connection.execute(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [process.env.DB_NAME || "oracis_ai"]
    );
    const dbExists = (databases as any[]).length > 0;

    if (!dbExists) {
      // Create database and run setup.sql
      await connection.execute(
        `CREATE DATABASE ${process.env.DB_NAME || "oracis_ai"}`
      );
      console.log("Database created, running setup script...");

      // Read and execute setup.sql
      const setupSql = fs.readFileSync(
        path.join(__dirname, "../../sql/setup.sql"),
        "utf8"
      );
      const statements = setupSql
        .split(";")
        .map((statement) => statement.trim())
        .filter((statement) => statement.length > 0);

      for (const statement of statements) {
        try {
          await connection.query(statement);
        } catch (error) {
          console.error("Error executing statement:", error);
        }
      }
    }
    connection.release();

    // Create new pool with database selected
    pool = mysql.createPool(dbConfig);

    // Test the connection
    const testConnection = await pool.getConnection();
    await testConnection.execute("SELECT 1");
    testConnection.release();

    console.log("Database connection pool initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};

export const testConnection = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [rows] = await connection.execute("SELECT 1");
    if (rows) {
      console.log("Database connection test successful");
      return true;
    }
    return false;
  } catch (error) {
    console.error("Database connection test failed:", error);
    return false;
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (err) {
        console.error("Error releasing test connection:", err);
      }
    }
  }
};

export const getConnection = async () => {
  try {
    return await pool.getConnection();
  } catch (error) {
    console.error("Error getting database connection:", error);
    throw error;
  }
};

export const closePool = async () => {
  try {
    await pool.end();
    console.log("MySQL Database pool closed successfully");
  } catch (error) {
    console.error("Error closing MySQL Database pool:", error);
    throw error;
  }
};
