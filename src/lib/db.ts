import "server-only";

import { neon } from "@neondatabase/serverless";

/** Neon's HTTP query function, or null when DATABASE_URL is not configured. */
function client() {
  const url = process.env.DATABASE_URL;
  return url ? neon(url) : null;
}

export interface JoinApplicationRow {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  age: string;
  status: string;
  organisation: string;
  interests: string[];
  skills: string;
  motivation: string;
  time: string;
  involvement: string[];
  consent: boolean;
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

/** Saves a Join YouthLink application. Returns its id, or null if it could not be saved. */
export async function saveJoinApplication(row: JoinApplicationRow): Promise<number | null> {
  const sql = client();
  if (!sql) {
    console.error("[db] Not saved: set DATABASE_URL in the environment.");
    return null;
  }
  try {
    const result = await sql`
      INSERT INTO join_applications (
        full_name, email, phone, city, age, status, organisation, interests, skills,
        motivation, time_commitment, involvement, consent
      ) VALUES (
        ${row.fullName}, ${row.email}, ${optional(row.phone)}, ${row.city}, ${row.age},
        ${row.status}, ${optional(row.organisation)}, ${row.interests}, ${optional(row.skills)},
        ${row.motivation}, ${row.time}, ${row.involvement}, ${row.consent}
      )
      RETURNING id`;
    return Number(result[0]?.id);
  } catch (error) {
    console.error("[db] Saving join application failed:", error);
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
  table: "join_applications" | "feedback_submissions",
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
