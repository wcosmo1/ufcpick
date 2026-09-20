import { NextRequest, NextResponse } from "next/server";
import { getFights } from "@/lib/ufc";

export async function GET(req: NextRequest) {
  const eventId = req.nextUrl.searchParams.get("eventId");
  if (!eventId) {
    return NextResponse.json(
      { error: "eventId query param required" },
      { status: 400 }
    );
  }
  const fights = await getFights(eventId);
  return NextResponse.json(fights);
}
