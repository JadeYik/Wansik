// This file sets up the database connection with your local database.
import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const client = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: 5433
  });

client.connect();