import PostCard from "./PostCard";

export default function PostList({ fetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {fetchedData &&
        fetchedData.map((post, index) => (
          <PostCard key={index} post={post} selectedUser={selectedUser} />
        ))}
    </div>
  );
}
