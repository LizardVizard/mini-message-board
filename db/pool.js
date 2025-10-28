// import dotenv from "dotenv";
import { Pool } from "pg";

const isProduction = (process.env.APP_ENV || "").toLowerCase() === "production";
const isDevelopment =
  (process.env.APP_ENV || "").toLowerCase() === "development";

if (!isProduction || isDevelopment) {
  // import("dotenv").then((dotenv) => dotenv.config());
  const dotenv = await import("dotenv");
  dotenv.config();
}

export const CONNECTION_SETTINGS = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: isProduction ? { rejectUnauthorized: false } : true,
};

export default new Pool(CONNECTION_SETTINGS);
