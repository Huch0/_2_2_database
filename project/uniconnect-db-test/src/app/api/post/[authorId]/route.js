// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { addPostByAuthorId, getPostByAuthorId } from "@/../db/api/post";

export async function GET(Request, { params }) {
  const authorId = params.authorId;
  const posts = await getPostByAuthorId(authorId);

  return NextResponse.json(posts);
}

export async function POST(Request, { params }) {
  const authorId = params.authorId;
  const { title, content } = await Request.json();
  await addPostByAuthorId(authorId, title, content);

  return GET(Request, { params });
}

export async function DELETE(Request, { params }) {
  const {postId} = await Request.json();
  console.log(postId);
  await deletePostByPostId(postId);

  return GET(Request, { params });
}

export async function PUT(Request, { params }) {
  const { postId, title, content } = await Request.json();
  await editPostByPostId(postId, title, content);

  return GET(Request, { params });
}