import { Contacts } from "../models/index.js";

export async function getContactsByLabId(selectedRole, id) {
  const Contact = selectContact(selectedRole);

  const contacts = await Contact.findAll({
    where: {
      lab_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return contacts;
}

export async function getContactByStudentId(selectedRole, id) {
  const Contact = selectContact(selectedRole);

  const contacts = await Contact.findAll({
    where: {
      student_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return contacts;
}

function selectContact(selectedRole) {
  let Contact = null;

  switch (selectedRole) {
    case "admin":
      Contact = Contacts.adminContact;
      break;
    case "reader":
      Contact = Contacts.readerContact;
      break;
    case "student":
      Contact = Contacts.studentContact;
      break;
    case "researcher":
      Contact = Contacts.researcherContact;
      break;
    case "lab_manager":
      Contact = Contacts.labManagerContact;
      break;
    case "banned":
      Contact = Contacts.bannedContact;
      break;
    default:
      throw new Error("Invalid role");
  }

  return Contact;
}
