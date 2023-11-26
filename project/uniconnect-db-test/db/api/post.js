import { Post } from "../models/index.js";

export async function getAllPosts() {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
  });

  return posts;
}
