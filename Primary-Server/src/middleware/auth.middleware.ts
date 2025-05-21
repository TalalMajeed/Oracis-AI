import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { redisClient } from "../config/redis";
import { UserPayload } from "../types/auth.types";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

interface AuthRequest extends Request {
  user?: any;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export const generateToken = (payload: UserPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET || "your-secret-key", {
    expiresIn: "24h",
  });
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    next();

    if (!req.user) {
      return res.status(401).json({ message: "Authentication required" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Insufficient permissions" });
    }

    next();
  };
};
