import { NextResponse } from "next/server";
import { incrementClickCount } from "@/lib/clicks";
import { isLinkId } from "@/lib/linkIds";

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  if (!isLinkId(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClickCount(id);
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Failed to increment click count", error);
    return NextResponse.json(
      { error: "클릭 수를 갱신하지 못했습니다." },
      { status: 500 },
    );
  }
}
