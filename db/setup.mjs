// Creates the form-submission tables in Neon: `npm run db:setup`.
// Reads DATABASE_URL from the environment (npm script loads .env.local via --env-file).
import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set (add it to .env.local).");
  process.exit(1);
}

const sql = neon(url);
const schema = readFileSync(new URL("./schema.sql", import.meta.url), "utf8");
const statements = schema
  .split(/;\s*$/m)
  .map((statement) => statement.replace(/^\s*--.*$/gm, "").trim())
  .filter(Boolean);

for (const statement of statements) {
  await sql.query(statement);
}

const tables = await sql.query(
  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('join_registrations', 'feedback_submissions') ORDER BY table_name",
);
console.log("Ready:", tables.map((row) => row.table_name).join(", "));
