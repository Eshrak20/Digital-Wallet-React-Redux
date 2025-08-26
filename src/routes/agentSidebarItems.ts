import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import WithdrawAdd from "@/Pages/Dashboard/PaymentCashout/WithdrawAdd";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
import MyProfile from "@/Pages/Dashboard/User/MyProfile";
const AllCommission = lazy(
  () => import("@/Pages/Dashboard/Commission/AllCommission")
);

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Profile",
        url: "/agent/dashboard/my-profile",
        component: MyProfile,
        icon: "w",
      },
    ],
  },
  {
    title: "Commission",
    items: [
      {
        title: "All Commission",
        url: "/agent/dashboard/agent-com",
        component: AllCommission,
        icon: "w",
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "Your Wallet",
        url: "/agent/dashboard/my-wallet",
        component: AllWallet,
        icon: "w",
      },
      {
        title: "Add Money",
        url: "/agent/dashboard/wallet/add",
        component: WithdrawAdd,
        icon: "w",
      },
    ],
  },
];
