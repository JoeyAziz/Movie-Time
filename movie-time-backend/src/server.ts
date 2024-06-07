import app from "./app";
import dotenv from "dotenv";
import pool from "./config/database";
import setupDatabase from "./setupDatabase";
import startScheduler from "./scheduler/scheduler";

dotenv.config();

const port = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await pool.getConnection();
    console.log("🏁 Connected to the database");

    await setupDatabase();
    startScheduler();

    app.listen(port, () => {
      console.log(`✅ Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database:", err);
    setTimeout(startServer, 5000);
  }
};

startServer();
