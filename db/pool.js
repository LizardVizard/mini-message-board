import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

export const CONNECTION_SETTINGS = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
};

export default new Pool(CONNECTION_SETTINGS);
