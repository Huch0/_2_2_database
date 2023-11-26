// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getLikesByPostId } from "@/../db/api/like";

export async function GET(Request, { params }) {
  const likes = await getLikesByPostId(params.postId);

  //console.log(users);

  return NextResponse.json(likes);
}
