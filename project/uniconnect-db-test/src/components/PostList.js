import PostCard from "./PostCard";
import { useState } from "react";

export default function PostList({ fetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {/* { JSON.stringify(fetchedData) } */}
      {fetchedData.map((post) => (
        <PostCard key={post.id} post={post} selectedUser={selectedUser} />
      ))}
    </div>
  );
}
