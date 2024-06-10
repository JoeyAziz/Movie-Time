import express, { Request, Response } from "express";
import {
  addToWatchlist,
  discover,
  movieDetails,
  movieDetailsForUser,
  removeFromWatchlist,
} from "../controllers/moviesController";
import { AuthenticatedRequest, authenticateUser, conditionalUserToken } from "../utils/jwt";

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
      const result = await movieDetails(req.params.movieId);
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
});

router.post("/:movieId/watchlist", authenticateUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(500).json({ error: "could not resolve user id" });
      return;
    }
    const { movieId } = req.params;
    await addToWatchlist(userId, movieId);
    res.status(200).json({ message: "Movie added to watch list" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:movieId/watchlist", authenticateUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(500).json({ error: "could not resolve user id" });
      return;
    }
    const { movieId } = req.params;
    await removeFromWatchlist(userId, movieId);
    res.status(200).json({ message: "Movie removed from watch list" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
