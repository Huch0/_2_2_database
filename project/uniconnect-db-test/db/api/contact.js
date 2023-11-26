import { Contact } from "../models/index.js";

export async function getAllcontacts() {
  const contacts = await Contact.findAll({
    order: [["createdAt", "DESC"]],
  });

  return contacts;
}
