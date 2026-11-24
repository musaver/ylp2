import "server-only";

import { neon } from "@neondatabase/serverless";

/** Neon's HTTP query function, or null when DATABASE_URL is not configured. */
function client() {
  const url = process.env.DATABASE_URL;
  return url ? neon(url) : null;
}

export interface JoinRegistrationRow {
  fullName: string;
  age: number;
  gender: string;
  city: string;
  whatsapp: string;
  email: string;
  employment: string;
  studies: string;
  institution: string;
  heardFrom: string;
  expectations: string;
  motivation: string;
  leadership: number;
  skills: string[];
  portfolioNote: string;
  portfolioFileName: string;
  portfolioFileSize: number | null;
  neverBecome: string;
  youthInfluence: string;
  comments: string;
}

export interface FeedbackRow {
  category: string;
  topic: string;
  fullName: string;
  email: string;
  phone: string;
  body: string;
}

/** Empty optional fields are stored as NULL. */
function optional(value: string): string | null {
  return value === "" ? null : value;
}

/** Saves a Join YouthLink registration. Returns its id, or null if it could not be saved. */
export async function saveJoinRegistration(row: JoinRegistrationRow): Promise<number | null> {
  const sql = client();
  if (!sql) {
    console.error("[db] Not saved: set DATABASE_URL in the environment.");
    return null;
  }
  try {
    const result = await sql`
      INSERT INTO join_registrations (
        full_name, age, gender, city, whatsapp, email, employment, studies, institution,
        heard_from, expectations, motivation, leadership_rating, skills, portfolio_note,
        portfolio_file_name, portfolio_file_size, never_become, youth_influence, comments
      ) VALUES (
        ${row.fullName}, ${row.age}, ${row.gender}, ${row.city}, ${row.whatsapp},
        ${optional(row.email)}, ${row.employment}, ${row.studies}, ${row.institution},
        ${row.heardFrom}, ${row.expectations}, ${row.motivation}, ${row.leadership},
        ${row.skills}, ${optional(row.portfolioNote)}, ${optional(row.portfolioFileName)},
        ${row.portfolioFileSize}, ${optional(row.neverBecome)}, ${optional(row.youthInfluence)},
        ${row.comments}
      )
      RETURNING id`;
    return Number(result[0]?.id);
  } catch (error) {
    console.error("[db] Saving join registration failed:", error);
    return null;
  }
}

/** Saves a Feedback and Complaint submission. Returns its id, or null if it could not be saved. */
export async function saveFeedback(row: FeedbackRow): Promise<number | null> {
  const sql = client();
  if (!sql) {
    console.error("[db] Not saved: set DATABASE_URL in the environment.");
    return null;
  }
  try {
    const result = await sql`
      INSERT INTO feedback_submissions (category, topic, full_name, email, phone, body)
      VALUES (
        ${row.category}, ${row.topic}, ${row.fullName}, ${row.email}, ${optional(row.phone)},
        ${row.body}
      )
      RETURNING id`;
    return Number(result[0]?.id);
  } catch (error) {
    console.error("[db] Saving feedback failed:", error);
    return null;
  }
}

/** Records that the notification email for a saved row went out. */
export async function markEmailSent(
  table: "join_registrations" | "feedback_submissions",
  id: number,
): Promise<void> {
  const sql = client();
  if (!sql) return;
  try {
    // Table name comes from the fixed union above, never from user input.
    await sql.query(`UPDATE ${table} SET email_sent = true WHERE id = $1`, [id]);
  } catch (error) {
    console.error(`[db] Marking ${table} #${id} as emailed failed:`, error);
  }
}
