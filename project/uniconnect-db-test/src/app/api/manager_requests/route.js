// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getAllManager_requests } from "@/../db/api/manager_requests";
import { parse } from "url";

export async function GET(Request) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;
  
  const manager_requests = await getAllManager_requests(selectedRole);

  return NextResponse.json(manager_requests);
}