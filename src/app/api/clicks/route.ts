import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export async function GET() {
  try {
    const counts = await getClickCounts();
    return NextResponse.json({ counts });
  } catch (error) {
    console.error("Failed to load click counts", error);
    return NextResponse.json(
      { error: "클릭 수를 불러오지 못했습니다." },
      { status: 500 },
    );
  }
}
