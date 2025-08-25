import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import WithdrawAdd from "@/Pages/Dashboard/PaymentCashout/WithdrawAdd";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
const AllCommission = lazy(
  () => import("@/Pages/Dashboard/Commission/AllCommission")
);

export const agentSidebarItems: ISidebarItem[] = [
  {
    title: "Commission",
    items: [
      {
        title: "All Commission",
        url: "/agent/dashboard/agent-com",
        component: AllCommission,
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
      },
      {
        title: "Add Money",
        url: "/agent/dashboard/wallet/add",
        component: WithdrawAdd,
      },
    ],
  },
];
