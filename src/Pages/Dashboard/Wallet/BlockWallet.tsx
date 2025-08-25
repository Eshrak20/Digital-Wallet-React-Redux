import { useState } from "react";
import { useCreateBlockWalletMutation } from "@/redux/api/adminApi";
import { toast } from "react-toastify";

const BlockWallet = () => {
  const [walletId, setWalletId] = useState("");
  const [status, setStatus] = useState("");

  const [createBlockWallet, { isLoading }] = useCreateBlockWalletMutation();

  const handleUpdateStatus = async () => {
    if (!walletId || !status)
      return toast.error("Please enter wallet ID and select status");

    try {
      await createBlockWallet({ id: walletId, body: { status } }).unwrap();
      toast.success(`Wallet status updated to "${status}"!`);
      setStatus("");
      setWalletId("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to update status");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Block / Activate Wallet
      </h2>

      <input
        type="text"
        placeholder="Enter Wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
        className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
      />

      <div className="space-y-2">
        <label>Update Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
        >
          <option value="">Select Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="BLOCKED">BLOCKED</option>
        </select>
        <button
          onClick={handleUpdateStatus}
          disabled={!status || !walletId || isLoading}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
        >
          Update Status
        </button>
      </div>
    </div>
  );
};

export default BlockWallet;
