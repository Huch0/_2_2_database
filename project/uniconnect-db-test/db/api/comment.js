import { Comment } from "../models/index.js";

export async function getCommentsByPostId(id) {
  const comments = await Comment.findAll({
    where: {
      post_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return comments;
}
