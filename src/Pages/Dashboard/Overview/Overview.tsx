import QuickActionUi from "./QuickActionUi";
import { getSidebarItems } from "@/utils/getSidebarItems";
import {
  useGetMyProfileQuery,
  useGetYourWalletQuery,
  useGetYourTransQuery,
} from "@/redux/api/userApi";
import type { TRole } from "@/types/auth.type";
import WalletBalanceUi from "./WalletBalanceUi";
import RecentTransactionsUi from "./RecentTransactionsUi";

const Overview = () => {
  // Get user profile
  const { data: userData, isLoading: isUserLoading } =
    useGetMyProfileQuery(undefined);

  // Get wallet balance
  const { data: walletData, isLoading: isWalletLoading } =
    useGetYourWalletQuery(undefined);

  // Get recent transactions
  const limit = 3;
  const page = 1;

  const { data: transData, isLoading: isTransLoading } = useGetYourTransQuery({
    page,
    limit,
  });

  const role = userData?.data?.data?.role;
  const sidebarItems = getSidebarItems(role as TRole);

  // flatten all sidebar items to a single array for quick actions
  const quickActions = sidebarItems
    .flatMap((group) => group.items)
    .filter((item) => item.title !== "Dashboard"); // optional: skip some items
  // console.log(walletData?.data?.data[0]);
  console.log(transData?.data?.data[0]); // 904

  return (
    <div className="space-y-6">
      {/* Wallet Balance Section */}
      <WalletBalanceUi
        balance={walletData?.data?.data[0]?.balance}
        loading={isWalletLoading}
      />

      {/* Quick Actions Section */}
      <QuickActionUi actions={quickActions} />

      {/* Recent Transactions Section */}
      <RecentTransactionsUi
        transactions={transData?.data?.data || []}
        loading={isTransLoading}
      />
    </div>
  );
};

export default Overview;
