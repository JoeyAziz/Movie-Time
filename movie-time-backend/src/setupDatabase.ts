import fs from "fs";
import pool from "./config/database";
import path from "path";

const __dirname = path.resolve();
const setupDatabase = async () => {
  try {
    const filePath = path.join(__dirname, "/migrations/tables.sql");
    const sql = fs.readFileSync(filePath, "utf8");

    const connection = await pool.getConnection();
    await connection.query(sql);
    connection.release();

    console.log("🏁 Database setup completed successfully.");
  } catch (error) {
    console.error("❌ Error setting up the database:", error);
  }
};

export default setupDatabase;
