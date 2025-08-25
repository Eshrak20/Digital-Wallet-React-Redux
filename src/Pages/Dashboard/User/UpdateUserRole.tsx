import { useState } from "react";
import { useUpdateUserRoleMutation } from "@/redux/api/adminApi";
import { toast } from "react-toastify";
import { handleApiError } from "@/utils/handleApiError";

const UpdateUserRole = () => {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("");

  const [updateUserRole, { isLoading }] = useUpdateUserRoleMutation();

  const handleUpdateRole = async () => {
    if (!userId || !role) {
      return toast.error("Please enter User ID and select a role");
    }

    try {
      await updateUserRole({ id: userId, body: { role } }).unwrap();
      toast.success(`User role updated to "${role}" successfully!`);
      setUserId("");
      setRole("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      handleApiError(err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Update User Role
      </h2>

      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
      />

      <div className="space-y-2">
        <label>Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="">Select Role</option>
          <option value="AGENT">AGENT</option>
          <option value="USER">USER</option>
        </select>

        <button
          onClick={handleUpdateRole}
          disabled={!role || !userId || isLoading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          Update Role
        </button>
      </div>
    </div>
  );
};

export default UpdateUserRole;
