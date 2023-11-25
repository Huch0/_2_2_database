// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getAllUsers } from "@/../db/api/user";

export async function GET(Request) {
  const users = await getAllUsers();

  //console.log(users);

  return NextResponse.json(users);
}
