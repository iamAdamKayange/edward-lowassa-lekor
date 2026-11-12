import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const choices = ["Professional development", "Member wellbeing", "Quality pharmacy practice", "A stronger professional voice"];

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return NextResponse.json({ error: "Poll is not configured" }, { status: 503 });
  try {
    const db = neon(databaseUrl);
    const rows = await db`SELECT choice, COUNT(*)::int AS count FROM campaign_poll_votes GROUP BY choice`;
    const counts = Object.fromEntries(choices.map((choice) => [choice, 0])) as Record<string, number>;
    for (const row of rows) counts[String(row.choice)] = Number(row.count);
    return NextResponse.json({ counts, total: Object.values(counts).reduce((sum, count) => sum + count, 0) });
  } catch {
    return NextResponse.json({ error: "Could not load poll results" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return NextResponse.json({ error: "Poll is not configured" }, { status: 503 });
  try {
    const { choice } = await request.json();
    if (typeof choice !== "string" || !choices.includes(choice)) return NextResponse.json({ error: "Invalid choice" }, { status: 400 });
    const db = neon(databaseUrl);
    await db`INSERT INTO campaign_poll_votes (choice) VALUES (${choice})`;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save vote" }, { status: 500 });
  }
}
