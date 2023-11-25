"use client";

import React, { useState, useEffect } from "react";
import UserSelector from "@/components/UserSelector";
import FunctionButtonList from "@/components/FunctionButtonList";
import ContentDisplay from "@/components/ContentDisplay";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [fetchedData, setFetchedData] = useState(null);
  const [contentType, setContentType] = useState(null);

  return (
    <div>
      <UserSelector
        users={users}
        setUsers={setUsers}
        setSelectedUser={setSelectedUser}
      />
      <FunctionButtonList
        selectedUser={selectedUser}
        setFetchedData={setFetchedData}
        setContentType={setContentType}
      />
      <ContentDisplay fetchedData={fetchedData} contentType={contentType} />
    </div>
  );
}
