import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import AllCommission from "@/Pages/Dashboard/Commission/AllCommission";
import AllTrans from "@/Pages/Dashboard/Transaction/AllTrans";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
import BlockWallet from "@/Pages/Dashboard/Wallet/BlockWallet";
import AddMoneyWallet from "@/Pages/Dashboard/Wallet/AddMoneyWallet";
import UpdateUserRole from "@/Pages/Dashboard/User/UpdateUserRole";
const AllUsers = lazy(() => import("@/Pages/Dashboard/User/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "All Users",
        url: "/admin/dashboard/all-users",
        component: AllUsers,
      },
      {
        title: "All Agents",
        url: "/admin/dashboard/all-agents",
        component: AllUsers,
      },
      {
        title: "Update User Role",
        url: "/admin/dashboard/update-user-role",
        component: UpdateUserRole,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "All Transaction",
        url: "/admin/dashboard/all-trans",
        component: AllTrans,
      },
    ],
  },
  {
    title: "Commission",
    items: [
      {
        title: "All Commission",
        url: "/admin/dashboard/all-agent-com",
        component: AllCommission,
      },
    ],
  },
  {
    title: "Wallet",
    items: [
      {
        title: "All Wallet",
        url: "/admin/dashboard/all-wallet",
        component: AllWallet,
      },
      {
        title: "Add Money",
        url: "/admin/dashboard/add-money-wallet",
        component: AddMoneyWallet,
      },
      {
        title: "Block Wallet",
        url: "/admin/dashboard/block-wallet",
        component: BlockWallet,
      },
    ],
  },
];
