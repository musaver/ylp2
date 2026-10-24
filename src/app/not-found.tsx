import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 24,
        textAlign: "center",
        fontFamily: '"Inter", sans-serif',
        color: "var(--token-c7e8e6d2-1a37-471a-9498-bf74cbe24d87, #07232f)",
      }}
    >
      <h1 style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 48, margin: 0 }}>
        Page not found
      </h1>
      <p style={{ margin: 0 }}>The page you are looking for doesn’t exist or has moved.</p>
      <Link href="/" style={{ textDecoration: "underline" }}>
        Back to the home page
      </Link>
    </main>
  );
}
