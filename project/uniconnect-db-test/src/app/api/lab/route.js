// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getAllLabs } from "@/../db/api/lab";

export async function GET(Request) {
  const labs = await getAllLabs();

  //console.log(users);

  return NextResponse.json(labs);
}
