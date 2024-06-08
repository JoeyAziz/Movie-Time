import express from "express";
import cors from "cors";
import movieRoutes from "./routes/movies";
import healthRoutes from "./routes/health";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use("/health", healthRoutes);
app.use("/api/movies", movieRoutes);

export default app;
