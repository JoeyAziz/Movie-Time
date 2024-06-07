import express, { Request, Response } from "express";
import { discover } from "../controllers/moviesController";

const router = express.Router();

router.get("/discover", async (_: Request, res: Response) => {
  try {
    const result = await discover();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
