// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { addPostByAuthorId, getPostByAuthorId } from "@/../db/api/post";
import { parse } from "url";

export async function GET(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const authorId = params.authorId;
  const posts = await getPostByAuthorId(selectedRole, authorId);

  return NextResponse.json(posts);
}

export async function POST(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const authorId = params.authorId;
  const { title, content } = await Request.json();
  await addPostByAuthorId(selectedRole, authorId, title, content);

  return GET(Request, { params });
}

export async function DELETE(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const { postId } = await Request.json();
  console.log(postId);
  await deletePostByPostId(selectedRole, postId);

  return GET(Request, { params });
}

export async function PUT(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const { postId, title, content } = await Request.json();
  await editPostByPostId(selectedRole, postId, title, content);

  return GET(Request, { params });
}
