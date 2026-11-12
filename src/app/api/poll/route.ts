import { NextResponse } from "next/server";
import { sql } from "@neondatabase/serverless";

const choices = ["Maendeleo ya kitaaluma", "Ustawi na ushiriki wa wanachama", "Ubora wa huduma za famasia", "Sauti na uwakilishi imara"];

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return NextResponse.json({ error: "Poll is not configured" }, { status: 503 });
  try {
    const db = sql(databaseUrl);
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
    const db = sql(databaseUrl);
    await db`INSERT INTO campaign_poll_votes (choice) VALUES (${choice})`;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Could not save vote" }, { status: 500 });
  }
}
