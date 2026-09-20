import { NextRequest, NextResponse } from "next/server";
import { buildMockResearch } from "@/lib/mock-data";
import { getFight } from "@/lib/ufc";

export async function POST(req: NextRequest) {
  let body: { fightId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fightId = body.fightId;
  if (!fightId) {
    return NextResponse.json({ error: "fightId required" }, { status: 400 });
  }

  const fight = await getFight(fightId);
  if (!fight) {
    return NextResponse.json({ error: "Fight not found" }, { status: 404 });
  }

  // Simulate brief research latency for demo UX
  await new Promise((r) => setTimeout(r, 400));

  return NextResponse.json(buildMockResearch(fight));
}
