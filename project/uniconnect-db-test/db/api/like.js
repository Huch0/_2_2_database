import { Like } from "../models/index.js";

export async function getLikesByPostId(id) {
  const likes = await Like.findAll({
    where: {
      post_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return likes;
}
