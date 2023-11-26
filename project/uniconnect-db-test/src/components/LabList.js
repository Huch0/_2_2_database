import React from "react";

function LabCard({ lab, selectedUser }) {
  return (
    <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-1 w-full flex-col justify-between">
      <div className="flex items-start px-4 py-6">
        <div className="">
          <h1 className="text-lg font-semibold">{lab.lab_name}</h1>
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-gray-900 -mt-1">
              {lab.school_id /* school_id를 school_name으로 바꾸세요. */}
            </h2>
          </div>
          <p className="mt-3 text-gray-700 text-sm">{lab.description}</p>
        </div>
      </div>
      <div className="flex justify-end space-x-4 p-4">
        <button className="bg-white text-blue-500 border hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
          구독
        </button>
        <button className="bg-white text-blue-500 border hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
          컨택
        </button>
        {
          // research이고 lab의 manager가 아니면 보임.
          selectedUser.role === "researcher" &&
            selectedUser.id !== lab.manager_id && (
              <button className="bg-white text-blue-500 border hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
                연구실 관리자 신청
              </button>
            )
        }
      </div>
    </div>
  );
}

export default function LabList({ fetchedData, selectedUser }) {
  return (
    <div className="flex flex-col">
      {/* {JSON.stringify(fetchedData)} */}
      {fetchedData.map((lab) => (
        <LabCard key={lab.id} lab={lab} selectedUser={selectedUser} />
      ))}
    </div>
  );
}
