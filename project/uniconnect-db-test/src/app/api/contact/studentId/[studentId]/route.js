// In this file, we can define any type of request as follows:
// export async function GET(Request) {}
// export async function HEAD(Request) {}
// export async function POST(Request) {}
// export async function PUT(Request) {}
// export async function DELETE(Request) {}
//  A simple GET Example

import { NextResponse } from "next/server";
import { getContactByStudentId, createContact, updateContact} from "@/../db/api/contact";
import { parse } from "url";

export async function GET(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const contact = await getContactByStudentId(selectedRole, params.studentId);

  return NextResponse.json(contact);
}

export async function POST(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const student_id = params.studentId;
  const {lab_id} = await Request.json();

  const contact = await createContact(selectedRole, 
    {
      student_id: student_id,
      lab_id: lab_id,
      status: "pending",
    }
  );

  return NextResponse.json(contact);
}

export async function PUT(Request, { params }) {
  const { query } = parse(Request.url, true);
  const selectedRole = query.selectedRole;

  const student_id = params.studentId;
  const {status} = await Request.json();

  const contact = await updateContact(selectedRole, student_id, 
    {
      status: status,
    }
  );

  return NextResponse.json(contact);
}