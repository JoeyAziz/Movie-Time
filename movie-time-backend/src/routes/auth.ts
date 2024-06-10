import express from "express";
import { generateToken } from "../utils/jwt";
import { login, signup } from "../controllers/authController";

const router = express.Router();

const tokenize = (res: any, identifier: string) => {
  const token = generateToken(identifier);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000, // 1 hour
  });
};

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await signup(username, password);
    tokenize(res, user.added_id.toString());

    res.status(201).json({ message: "User created successfully" });
  } catch (error: any) {
    console.error("Error signup:", error);
    res.status(500).json({ message: error?.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await login(username, password);
    tokenize(res, user.added_id.toString());

    res.status(201).json({ message: "User logged in successfully" });
  } catch (error: any) {
    console.error("Error login:", error);
    res.status(500).json({ message: error?.message });
  }
});

export default router;
