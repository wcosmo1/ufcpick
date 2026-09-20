import { NextResponse } from "next/server";
import { listEvents } from "@/lib/ufc";

export async function GET() {
  const { events, meta } = await listEvents();
  return NextResponse.json(events, {
    headers: {
      "X-UFC-Data-Source": meta.source,
      "X-UFC-Data-Cached": meta.cached ? "1" : "0",
    },
  });
}
