import { User } from "../models/index.js";

export async function getAllUsers() {
  const users = await User.findAll({
    order: [["createdAt", "DESC"]],
  });

  return users;
}
