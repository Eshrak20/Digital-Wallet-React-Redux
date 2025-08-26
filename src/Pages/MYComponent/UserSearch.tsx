/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLazyGetAllUserQuery } from "@/redux/api/userApi";
import React, { useState } from "react";

interface UserSearchProps {
  onSelectUser: (user: any) => void;
}

const UserSearch: React.FC<UserSearchProps> = ({ onSelectUser }) => {
  const [search, setSearch] = useState("");
  const [trigger, { data, isFetching }] = useLazyGetAllUserQuery();

  // const handleSearch = () => {
  //   if (search.trim()) trigger({ searchTerm: search.trim() });
  // };
  // in UserSearch.tsx
  const handleSearch = () => {
    if (search.trim()) trigger({ email: search.trim() });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="mb-4 relative">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search by phone/email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          className="border p-2 rounded w-full focus:outline-none focus:ring focus:border-teal-500"
        />
        <button
          className="bg-teal-500 text-white px-4 rounded hover:bg-teal-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {isFetching && (
        <p className="text-sm text-gray-500 mt-1">Searching users...</p>
      )}

      {data?.users?.length > 0 && (
        <ul className="border rounded mt-2 max-h-56 overflow-auto bg-white shadow-md absolute w-full z-10">
          {data.users.map((user: any) => (
            <li
              key={user._id}
              className="p-2 hover:bg-teal-100 cursor-pointer"
              onClick={() => onSelectUser(user)}
            >
              <span className="font-semibold">{user.name}</span> -{" "}
              <span className="text-gray-600">{user.email}</span> -{" "}
              <span className="text-gray-600">{user.phone}</span>
            </li>
          ))}
        </ul>
      )}

      {data && data.users?.length === 0 && (
        <p className="text-sm text-gray-500 mt-1">No users found</p>
      )}
    </div>
  );
};

export default UserSearch;
