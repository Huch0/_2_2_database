// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import {deletePostByPostId, editPostByPostId } from "@/../db/api/post_delete_edit";

export async function POST(Request, { params }) {
    const postId = params.postId;
    const { title, content } = await Request.json();

    const updatedPost = await editPostByPostId(postId, title, content);

    return NextResponse.json(updatedPost);
}

export async function DELETE(Request, { params }) {
    const postId = params.postId;
    await deletePostByPostId(postId);

    return NextResponse.JSON({ message: 'Post deleted successfully' });

}