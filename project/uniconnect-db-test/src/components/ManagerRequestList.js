import { useState, useEffect } from "react";
import fetchData from "@/utils/fetchData";

function RequestCard({ request }) {
  const handleConfirm = () => {};
  const handleCancel = () => {};

  const [user, setUser] = useState(null);
  const [lab, setLab] = useState(null);

  useEffect(() => {
    // console.log(request, user, lab);
    if (!request || !request.user_id || !request.lab_id) return;
    fetchData(`/api/user/${request.user_id}`, setUser);
    fetchData(`/api/lab/${request.lab_id}`, setLab);
  }, [request]);

  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{user && user.user_name}</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">
              {lab && lab.lab_name}
            </h2>
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
      {fetchedData &&
        fetchedData.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
    </div>
  );
}
