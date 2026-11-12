import { NextResponse } from "next/server";
import { sql } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return NextResponse.json({ error: "Endorsements are not configured" }, { status: 503 });
  try {
    const { email } = await request.json();
    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    const db = sql(databaseUrl);
    await db`INSERT INTO campaign_endorsements (email) VALUES (${email.toLowerCase()}) ON CONFLICT (email) DO NOTHING`;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save endorsement" }, { status: 500 });
  }
}
