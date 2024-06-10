import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "the_very_jwt_secret";

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const conditionalUserToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decodedToken = jwt.verify(token, JWT_SECRET) as { userId: string };

      req.userId = decodedToken.userId;
      return next();
    } catch (error) {
      res.status(403).json({ message: "Invalid token" });
    }
  }

  next();
};
