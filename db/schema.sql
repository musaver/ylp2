-- Form submissions from the website (Neon / Postgres).
-- Safe to run more than once: `npm run db:setup` applies it using DATABASE_URL from .env.local.

-- Join YouthLink registrations (the "Youthlink Registration Form" questions).
-- Replaces the earlier join_applications table, which is no longer written to.
CREATE TABLE IF NOT EXISTS join_registrations (
  id                  bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at          timestamptz NOT NULL DEFAULT now(),
  full_name           text NOT NULL,
  age                 smallint NOT NULL,
  gender              text NOT NULL,
  city                text NOT NULL,
  whatsapp            text NOT NULL,
  email               text,
  employment          text NOT NULL,
  studies             text NOT NULL,
  institution         text NOT NULL,
  heard_from          text NOT NULL,
  expectations        text NOT NULL,
  motivation          text NOT NULL,
  leadership_rating   smallint NOT NULL CHECK (leadership_rating BETWEEN 1 AND 5),
  skills              text[] NOT NULL,
  portfolio_note      text,
  portfolio_file_name text,
  portfolio_file_size integer,
  never_become        text,
  youth_influence     text,
  comments            text NOT NULL,
  declaration_agreed  boolean NOT NULL DEFAULT true,
  email_sent          boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS join_registrations_created_at_idx
  ON join_registrations (created_at DESC);

CREATE TABLE IF NOT EXISTS feedback_submissions (
  id          bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at  timestamptz NOT NULL DEFAULT now(),
  category    text NOT NULL,
  topic       text NOT NULL,
  full_name   text NOT NULL,
  email       text NOT NULL,
  phone       text,
  body        text NOT NULL,
  email_sent  boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS feedback_submissions_created_at_idx
  ON feedback_submissions (created_at DESC);
