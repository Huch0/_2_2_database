import { Post } from "../models/index.js";

export async function getAllPosts() {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
  });

  return posts;
}

export async function getPostByAuthorId(id) {
  const post = await Post.findAll({
    where: {
      author_id: id,
    },
    order: [["createdAt", "DESC"]],
  });

  return post;
}

export async function addPostByAuthorId(id, title, content) {
  const post = await Post.create({
    author_id: id,
    title: title,
    content: content,    
  });

  return post;
}
