const dummy_users = [
  {
    id: 1,
    user_name: "김철수",
    role: "student",
  },
];

function UserCard({ user }) {
  const handleBan = () => {};

  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{user.user_name}</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">{user.role}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button
          onClick={handleBan}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          밴
        </button>
      </div>
    </div>
  );
}

export default function UserList({ data }) {
  return (
    <div className="flex flex-col">
      {dummy_users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
