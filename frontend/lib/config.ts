// Change this to point at your deployed backend once it's live.
// Falls back to NEXT_PUBLIC_API_BASE_URL if set (e.g. in Vercel env vars).
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";
