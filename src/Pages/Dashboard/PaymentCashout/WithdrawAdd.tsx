/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation } from "react-router-dom";
import WithdrawAddUI from "./WithdrawAddUI";
import {
  useCreateWithdrawMutation,
  useCreateTransferMutation,
} from "@/redux/api/userApi";
import { useCreateAddMoneyMutation } from "@/redux/api/agent.api";
import { handleApiError } from "@/utils/handleApiError";
import { handleTransactionToast } from "@/utils/handleTransactionToast";

const WithdrawAdd = () => {
  const location = useLocation();

  const isWithdraw = location.pathname.includes("wallet/withdraw");
  const isAddMoney = location.pathname.includes("wallet/add");
  const isTransfer = location.pathname.includes("wallet/transfer");

  const [createWithdraw, { isLoading: isWithdrawLoading }] =
    useCreateWithdrawMutation();
  const [createAddMoney, { isLoading: isAddMoneyLoading }] =
    useCreateAddMoneyMutation();
  const [createTransfer, { isLoading: isTransferLoading }] =
    useCreateTransferMutation();

  const title = isWithdraw ? "Withdraw" : isAddMoney ? "Add" : "Transfer";

  // Function to call the correct mutation
  const handleSubmit = async (body: any) => {
    try {
      let response;
      if (isWithdraw) response = await createWithdraw(body).unwrap();
      if (isAddMoney) response = await createAddMoney(body).unwrap();
      if (isTransfer) response = await createTransfer(body).unwrap();

      handleTransactionToast(title as "Withdraw" | "Add" | "Transfer", {
        data: response?.data,
        body,
      });
    } catch (err: any) {
      handleApiError(err);
    }
  };

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">{title} Money</h2>
      <WithdrawAddUI
        action={title}
        onSubmit={handleSubmit}
        isLoading={
          isWithdraw
            ? isWithdrawLoading
            : isAddMoney
            ? isAddMoneyLoading
            : isTransferLoading
        }
      />
    </>
  );
};

export default WithdrawAdd;
