import { Post } from "../models/index.js";

export async function fetch_posts() {
  const posts = await Post.findAll({
    limit: 3,
    order: [["createdAt", "DESC"]],
  });

  return posts;
}
