import { Contact } from "../models/index.js";

export async function getContactsByLabId(id) {
  const contacts = await Contact.findAll({
    where: {
      lab_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return contacts;
}
