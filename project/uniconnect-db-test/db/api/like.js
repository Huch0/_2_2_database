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

export async function createLikesByUserIdAndPostId(user_id, post_id) {
  await Like.create({
    user_id : user_id,
    post_id : post_id,
  });
  return;
}

export async function deleteLikesByUserIdAndPostId(user_id, post_id) {
  await Like.destroy({
    where: {
      user_id: user_id,
      post_id: post_id,
    }
  });

  return;
}
