import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const isProduction = (process.env.APP_ENV || "").toLowerCase() === "production";

export const CONNECTION_SETTINGS = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: isProduction,
};

export default new Pool(CONNECTION_SETTINGS);
