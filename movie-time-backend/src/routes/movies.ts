import express, { Request, Response } from "express";
import { discover, moveDetails, movieDetailsForUser } from "../controllers/moviesController";
import { AuthenticatedRequest, conditionalUserToken } from "../utils/jwt";

const router = express.Router();

router.get("/discover", async (_: Request, res: Response) => {
  try {
    const result = await discover();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:movieId/details", conditionalUserToken, async (req: AuthenticatedRequest, res: Response) => {
  if (req?.userId) {
    try {
      const userId = req?.userId;
      const result = await movieDetailsForUser(userId, req.params.movieId);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const result = await moveDetails(req.params.movieId);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
});

export default router;
