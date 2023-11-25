import PostCard from "./PostCard";
import { useState } from "react";

const dummy_posts = [
  {
    id: 1,
    title: "피드 제목",
    content: "피드 내용",
    author_id: 1,
    createdAt: "2021-10-10",
  },
];

export default function PostList({ data, selectedUser }) {
  return (
    <div className="flex flex-col">
      {dummy_posts.map((post) => (
        <PostCard key={post.id} post={post} selectedUser={selectedUser} />
      ))}
    </div>
  );
}
