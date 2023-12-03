import PostCard from "./PostCard";

export default function PostList({ fetchedData, setFetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {fetchedData &&
        fetchedData.dataType === "post" &&
        fetchedData.data.map((post, index) => (
          <PostCard key={index} post={post} setFetchedData={setFetchedData} selectedUser={selectedUser} />
        ))}
    </div>
  );
}
