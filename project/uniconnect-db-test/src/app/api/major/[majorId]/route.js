// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getMajorById } from "@/../db/api/major";

export async function GET(Request, { params }) {
  const major = await getMajorById(params.majorId);

  //console.log(users);

  return NextResponse.json(major);
}
