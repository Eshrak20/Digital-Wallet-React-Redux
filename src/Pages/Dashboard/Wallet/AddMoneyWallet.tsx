import { useState } from "react";
import { useCreateBlockWalletMutation } from "@/redux/api/adminApi";
import { toast } from "react-toastify";
import { handleApiError } from "@/utils/handleApiError";

const AddMoneyWallet = () => {
  const [walletId, setWalletId] = useState("");
  const [rawBalance, setBalance] = useState("");

  const [createBlockWallet, { isLoading }] = useCreateBlockWalletMutation();

  const handleAddBalance = async () => {
    console.log(parseInt(rawBalance))
    if (!walletId || !rawBalance) return toast.error("Please enter wallet ID and rawBalance");
    const balance = parseInt(rawBalance)
    try {
      await createBlockWallet({ id: walletId, body: { balance } }).unwrap();
      toast.success(`Added ${balance} to wallet successfully!`);
      setBalance("");
      setWalletId("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      handleApiError(err)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Add Money to Wallet</h2>

      <input
        type="text"
        placeholder="Enter Wallet ID"
        value={walletId}
        onChange={(e) => setWalletId(e.target.value)}
        className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
      />

      <div className="space-y-2">
        <label>Amount to Add</label>
        <input
          type="number"
          value={rawBalance}
          onChange={(e) => setBalance(e.target.value)}
          placeholder="Enter amount"
          className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-100"
        />
        <button
          onClick={handleAddBalance}
          disabled={!rawBalance || !walletId || isLoading}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 disabled:opacity-50"
        >
          Add Balance
        </button>
      </div>
    </div>
  );
};

export default AddMoneyWallet;
