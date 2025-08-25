import AllWallet from "@/Pages/Dashboard/AllWallet/AllWallet";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
const AllTrans = lazy(() => import("@/Pages/Dashboard/Transaction/AllTrans"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Transactions",
    items: [
      {
        title: "Your Transaction History",
        url: "/user/dashboard/your-trans",
        component: AllTrans,
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
      },
    ],
  },
];
