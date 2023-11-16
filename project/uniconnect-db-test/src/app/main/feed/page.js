import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the second post.",
  },
];

export default function Feed() {
  return (
    <div className="flex flex-col space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700">{post.content}</p>
          <Link href={`/post/${post.id}`}>
            <div className="text-blue-500 hover:underline mt-2 inline-block">Read more</div>
          </Link>
        </div>
      ))}
    </div>
  );
}