import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "../schema";
import dotenv from "dotenv";
dotenv.config();

let host: string;
let dbName: string;
let logger: boolean = false;
if (process.env.NODE_ENV === 'development') {
  dbName = process.env.DB_NAME;
  host = process.env.DB_HOST;
  logger = true;
} else if (process.env.NODE_ENV === 'production') {
  dbName = process.env.DB_NAME;
  host = process.env.DB_HOST;
} else {
  dbName = process.env.DB_NAME;
  host = process.env.DB_HOST;
  logger = true;
}

const client = new Client({
  host: host,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: dbName,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();
const db = drizzle(client, {schema, logger});
export { db }