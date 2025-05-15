import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

// Database connection configuration
const dbConfig = {
  user: process.env.DB_USER || "admin_user",
  password: process.env.DB_PASSWORD || "Admin_Password1",
  connectString: process.env.DB_CONNECT_STRING || "localhost:1521/XEPDB1",
};

// Create connection pool
let pool: oracledb.Pool;

// Execute query helper function
export const executeQuery = async (sql: string, params: any = {}) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.execute(sql, params);
    return result;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error("Error closing connection:", error);
      }
    }
  }
};

// Initialize database connection
export const initializeDatabase = async () => {
  try {
    pool = await oracledb.createPool({
      ...dbConfig,
      poolMin: 2,
      poolMax: 10,
      poolIncrement: 1,
      thin: true, // Enable thin mode
    });
    console.log("Database connection pool initialized successfully");
  } catch (error) {
    console.error("Error initializing database connection pool:", error);
    throw error;
  }
};

export const testConnection = async () => {
  let connection;
  try {
    connection = await pool.getConnection();
    const result = await connection.execute("SELECT 1 FROM DUAL");
    if (result && result.rows && result.rows.length > 0) {
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
        await connection.close();
      } catch (err) {
        console.error("Error closing test connection:", err);
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
    await pool.close();
    console.log("Oracle Database pool closed successfully");
  } catch (error) {
    console.error("Error closing Oracle Database pool:", error);
    throw error;
  }
};
