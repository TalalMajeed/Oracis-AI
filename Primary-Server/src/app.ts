import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { initializeDatabase, closePool } from "./config/database";
import { initializeRedis, closeRedisConnection } from "./config/redis";
import cvRoutes from "./routes/cv.routes";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
});
app.use(limiter);

// Routes
app.use("/api/cv", cvRoutes);

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke!" });
  }
);

// 404 handler
app.use((req: express.Request, res: express.Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Initialize database and Redis
const initializeApp = async () => {
  try {
    await initializeDatabase();
    await initializeRedis();
    console.log("Application initialized successfully");
  } catch (error) {
    console.error("Error initializing application:", error);
    process.exit(1);
  }
};

// Graceful shutdown
const shutdown = async () => {
  try {
    await closePool();
    await closeRedisConnection();
    console.log("Application shut down successfully");
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

export { app, initializeApp };
