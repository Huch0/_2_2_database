import { User } from "../models/index.js";

export async function getAllUsers() {
  const users = await User.findAll({
    order: [["createdAt", "DESC"]],
  });

  return users;
}

export async function getUserById(id) {
  const user = await User.findOne({
    where: {
      id: id,
    },
  });

  return user;
}
