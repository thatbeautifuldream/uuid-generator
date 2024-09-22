import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const count = searchParams.get("count");

  if (count) {
    const numCount = parseInt(count, 10);
    if (isNaN(numCount) || numCount < 1 || numCount > 100) {
      return NextResponse.json(
        { error: "Invalid count. Please provide a number between 1 and 100." },
        { status: 400 }
      );
    }

    const uuids = Array.from({ length: numCount }, () => uuidv4());
    return NextResponse.json({ uuids });
  }

  const uuid = uuidv4();
  return NextResponse.json({ uuid });
}
