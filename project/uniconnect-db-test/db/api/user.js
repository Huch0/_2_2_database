import { User } from "../models/index.js";

export async function fetch_users() {
  const users = await User.findAll({
    limit: 3,
    order: [["createdAt", "DESC"]],
  });

  return users;
}
