import express from "express";
import { generateToken, verifyToken } from "../utils/jwt";
import { login, signup } from "../controllers/authController";
import { updateUserToken } from "../core/users/service";

const router = express.Router();

const tokenize = async (res: any, identifier: string) => {
  const token = generateToken(identifier);

  await updateUserToken(identifier, token);

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
    await tokenize(res, user.added_id.toString());

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
    await tokenize(res, user.added_id.toString());

    res.status(201).json({ message: "User logged in successfully" });
  } catch (error: any) {
    console.error("Error login:", error);
    res.status(500).json({ message: error?.message });
  }
});

router.post("/logout", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  try {
    const decoded = verifyToken(token) as { userId: string };
    await updateUserToken(decoded.userId, null);

    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
