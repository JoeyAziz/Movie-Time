import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  res.send("Server is running and healthy");
});

export default router;
