import getPostMetadata from "@/utils/getPostsMetadata";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const postsSlugs = getPostMetadata();

    return new NextResponse(JSON.stringify({ slugs: postsSlugs }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), { status: 500 });
  }
}
