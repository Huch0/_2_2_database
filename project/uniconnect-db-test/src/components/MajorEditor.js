import React, { useState } from "react";

export default function MajorEditor(selectedUser) {
  const [major, setMajor] = useState("");

  const handleConfirm = () => {
    // Handle confirm action here
  };

  const handleCancel = () => {
    // Handle cancel action here
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="전공을 입력하세요"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="flex justify-end space-x-4">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          등록
        </button>
      </div>
    </div>
  );
}
