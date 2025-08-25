import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import AllCommission from "@/Pages/Dashboard/Commission/AllCommission";
import AllTrans from "@/Pages/Dashboard/Transaction/AllTrans";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
import BlockWallet from "@/Pages/Dashboard/Wallet/BlockWallet";
import AddMoneyWallet from "@/Pages/Dashboard/Wallet/AddMoneyWallet";
const AllUsers = lazy(() => import("@/Pages/Dashboard/User/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "All Users",
        url: "/dashboard/all-users",
        component: AllUsers,
      },
      {
        title: "All Agents",
        url: "/dashboard/all-agents",
        component: AllUsers,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "All Transaction",
        url: "/dashboard/all-trans",
        component: AllTrans,
      },
    ],
  },
  {
    title: "Commission",
    items: [
      {
        title: "All Commission",
        url: "/dashboard/all-agent-com",
        component: AllCommission,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "All Wallet",
        url: "/dashboard/all-wallet",
        component: AllWallet,
      },
      {
        title: "Add Money",
        url: "/dashboard/add-money-wallet",
        component: AddMoneyWallet,
      },
      {
        title: "Block Wallet",
        url: "/dashboard/block-wallet",
        component: BlockWallet,
      },
    ],
  },
  // {
  //   title: "User Management",
  //   items: [
  //     {
  //       title: "Block User",
  //       url: "/block-user",
  //       component: AddTourType,
  //     },
  //     {
  //       title: "Update User Role",
  //       url: "/update-user-role",
  //       component: AddDivision,
  //     },
  //     {
  //       title: "Block User Wallet",
  //       url: "/block-user-wallet",
  //       component: AddTour,
  //     },
  //   ],
  // },
];
