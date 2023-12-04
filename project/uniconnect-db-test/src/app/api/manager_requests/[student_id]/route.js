// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { createManager_request } from "@/../db/api/manager_requests";
import { parse } from "url";

export async function POST(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const student_id = params.student_id;
  const {lab_id} = await Request.json();
  console.log(lab_id);
  console.log(student_id);

  const manager_request = await createManager_request(selectedRole, {
    user_id : student_id,
    lab_id : lab_id,
  });

  return NextResponse.json(manager_request);
}
