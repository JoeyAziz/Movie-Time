import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth";
import movieRoutes from "./routes/movies";
import healthRoutes from "./routes/health";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    allowedHeaders: ["Access-Control-Allow-Headers", "X-Requested-With,content-type"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());
app.use("/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

export default app;
