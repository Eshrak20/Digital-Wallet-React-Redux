import { useGetYourTransQuery } from "@/redux/api/userApi";
import { useLocation } from "react-router-dom";
import { User as UserIcon } from "lucide-react";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import TransactionUi from "./TransactionUi";
import { useGetAllTransQuery } from "@/redux/api/adminApi";
import type { Transaction } from "@/types/admin.type";

const AllTrans = () => {
  const location = useLocation();

  const isAdmin = location.pathname.includes("all-trans");

  const { data: adminData, isLoading: isAdminLoading } = useGetAllTransQuery();
  const { data: userData, isLoading: isUserLoading } = useGetYourTransQuery();

  const rawData = isAdmin ? adminData?.data?.data : userData?.data;
  const data: Transaction[] = Array.isArray(rawData) //! Here is the converter
    ? rawData
    : rawData?.data ?? [];  

  const isLoading = isAdmin ? isAdminLoading : isUserLoading;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        {isAdmin ? "Admin all" : "Your all"} Transaction
      </h2>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : !data || data.length === 0 ? (
        <div className="text-center py-12">
          <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-black">No Transaction found</h3>
          <p className="mt-1 text-gray-500">
            There are currently no transaction in your account.
          </p>
        </div>
      ) : (
        <TransactionUi data={data} />
      )}
    </>
  );
};

export default AllTrans;
