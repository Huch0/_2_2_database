import { Post } from "../models/index.js";

export async function deletePostByPostId(id) {
  const post = await Post.destroy({
    where: {
      id: id,
    },
  });

  return post;
}

export async function editPostByPostId(id, title, content) {
  const post = await Post.update(
    {
      title: title,
      content: content,
    },
    {
      where: {
        id: id,
      },
    }
  );

  return post;
}