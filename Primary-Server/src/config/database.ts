import oracledb from "oracledb";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: process.env.ORACLE_CONNECT_STRING,
  poolMin: 10,
  poolMax: 10,
  poolIncrement: 0,
};

let pool: oracledb.Pool | null = null;

export const testConnection = async () => {
  let connection;
  try {
    if (!pool) {
      pool = await oracledb.createPool(dbConfig);
    }
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

export const initializeDatabase = async () => {
  try {
    const isConnected = await testConnection();
    if (!isConnected) {
      throw new Error("Database connection test failed");
    }
    console.log("Oracle Database pool created successfully");
    return true;
  } catch (error) {
    console.error("Error creating Oracle Database pool:", error);
    throw error;
  }
};

export const getConnection = async () => {
  try {
    if (!pool) {
      throw new Error("Database pool not initialized");
    }
    return await pool.getConnection();
  } catch (error) {
    console.error("Error getting database connection:", error);
    throw error;
  }
};

export const closePool = async () => {
  try {
    if (pool) {
      await pool.close();
      pool = null;
      console.log("Oracle Database pool closed successfully");
    }
  } catch (error) {
    console.error("Error closing Oracle Database pool:", error);
    throw error;
  }
};
