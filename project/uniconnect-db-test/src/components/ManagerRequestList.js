import React from "react";

const dummy_requests = [
  {
    user_id: 1,
    lab_id: 1,
    user_name: "김철수", // dummy
    lab_name: "연구실 이름", // dummy
  },
];

function RequestCard({ request }) {
  const handleConfirm = () => {};
  const handleCancel = () => {};
  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{request.user_name}</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">{request.lab_name}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          수락
        </button>
        <button
          onClick={handleCancel}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          거절
        </button>
      </div>
    </div>
  );
}

export default function ManagerRequestList({ fetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {fetchedData.map((request) => (
        <RequestCard key={request.id} request={request} />
      ))}
    </div>
  );
}
