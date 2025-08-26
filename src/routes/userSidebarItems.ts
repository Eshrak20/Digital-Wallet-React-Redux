import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import WithdrawAdd from "@/Pages/Dashboard/PaymentCashout/WithdrawAdd";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
import MyProfile from "@/Pages/Dashboard/User/MyProfile";
const AllTrans = lazy(() => import("@/Pages/Dashboard/Transaction/AllTrans"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Profile",
        url: "/user/dashboard/my-profile",
        component: MyProfile,
        icon: "w",
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "Your Transaction History",
        url: "/user/dashboard/your-trans",
        component: AllTrans,
        icon: "w",
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "Your Wallet",
        url: "/user/dashboard/my-wallet",
        component: AllWallet,
        icon: "w",
      },
      {
        title: "Withdraw Money",
        url: "/user/dashboard/wallet/withdraw",
        component: WithdrawAdd,
        icon: "w",
      },
      {
        title: "Transfer Money",
        url: "/user/dashboard/wallet/transfer",
        component: WithdrawAdd,
        icon: "w",
      },
    ],
  },
];
