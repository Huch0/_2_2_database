function UserCard({ user }) {
  const handleBan = () => {};
  let cardColor = "bg-white";
  let statusMessage = "밴";

  if (user && user.role === "banned") {
    cardColor = "bg-red-200";
    statusMessage = "정지 된 사용자";
  }

  return (
    <div
      className={`flex ${cardColor} shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between`}
    >
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
          disabled={user.role === "banned"}
        >
          {statusMessage}
        </button>
      </div>
    </div>
  );
}

export default function UserList({ fetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {fetchedData &&
        fetchedData.dataType === "user" &&
        fetchedData.data.map((user) => <UserCard key={user.id} user={user} />)}
    </div>
  );
}
