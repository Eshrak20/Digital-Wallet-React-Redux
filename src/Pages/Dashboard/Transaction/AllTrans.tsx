import { useState } from "react";
import { useGetYourTransQuery } from "@/redux/api/userApi";
import { useGetAllTransQuery } from "@/redux/api/adminApi";
import { useLocation } from "react-router-dom";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import TransactionUi from "./TransactionUi";
import type { Transaction } from "@/types/admin.type";
import { User as UserIcon } from "lucide-react";
import Pagination from "@/Pages/MYComponent/Pagination";

const AllTrans = () => {
  const location = useLocation();
  const isAdmin = location.pathname.includes("all-trans");

  const [page, setPage] = useState(1);
  const limit = 9;

  const { data: adminData, isFetching: isAdminFetching } = useGetAllTransQuery({
    page,
    limit,
  });
  const { data: userData, isFetching: isUserFetching } = useGetYourTransQuery({
    page,
    limit,
  });

  const rawData = isAdmin ? adminData?.data?.data : userData?.data;
  const data: Transaction[] = Array.isArray(rawData)
    ? rawData
    : rawData?.data ?? [];
  const meta = isAdmin ? adminData?.data?.meta : userData?.data.meta;

  const isFetching = isAdmin ? isAdminFetching : isUserFetching;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-6">
        {isAdmin ? "Admin all" : "Your all"} Transaction
      </h2>

      <div className="flex flex-col min-h-9/12">
        <div className="flex-1">
          {/* Transactions grid */}
          {isFetching ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : !data || data.length === 0 ? (
            <div className="text-center py-12">
              <UserIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-black">
                No Transaction found
              </h3>
              <p className="mt-1 text-gray-500">
                There are currently no transaction in your account.
              </p>
            </div>
          ) : (
            <TransactionUi data={data} />
          )}
        </div>

        <div className="mt-0">
          <Pagination
            currentPage={page}
            totalItems={meta?.total ?? 0}
            perPage={limit}
            onPageChange={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default AllTrans;
