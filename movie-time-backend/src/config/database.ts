import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connectionPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});

export default connectionPool;
