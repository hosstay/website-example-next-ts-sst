import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' });

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL is missing");
}

// console.log(`db.ts: Database URL: ${dbUrl}`);

const client = postgres(dbUrl);
export const db = drizzle(client);