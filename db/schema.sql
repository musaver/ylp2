-- Form submissions from the website (Neon / Postgres).
-- Safe to run more than once: `npm run db:setup` applies it using DATABASE_URL from .env.local.

CREATE TABLE IF NOT EXISTS join_applications (
  id            bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at    timestamptz NOT NULL DEFAULT now(),
  full_name     text NOT NULL,
  email         text NOT NULL,
  phone         text,
  city          text NOT NULL,
  age           text NOT NULL,
  status        text NOT NULL,
  organisation  text,
  interests     text[] NOT NULL,
  skills        text,
  motivation    text NOT NULL,
  time_commitment text NOT NULL,
  involvement   text[] NOT NULL,
  consent       boolean NOT NULL,
  email_sent    boolean NOT NULL DEFAULT false
);

CREATE INDEX IF NOT EXISTS join_applications_created_at_idx
  ON join_applications (created_at DESC);

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
