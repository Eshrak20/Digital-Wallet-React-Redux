import AllWallet from "@/Pages/Dashboard/Wallet/AllWallet";
import AllCommission from "@/Pages/Dashboard/Commission/AllCommission";
import AllTrans from "@/Pages/Dashboard/Transaction/AllTrans";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
import BlockWallet from "@/Pages/Dashboard/Wallet/BlockWallet";
import AddMoneyWallet from "@/Pages/Dashboard/Wallet/AddMoneyWallet";
import UpdateUserRole from "@/Pages/Dashboard/User/UpdateUserRole";
import MyProfile from "@/Pages/Dashboard/User/MyProfile";
const AllUsers = lazy(() => import("@/Pages/Dashboard/User/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Profile",
        url: "/admin/dashboard/my-profile",
        component: MyProfile,
        icon: "w",
      },
    ],
  },
  {
    title: "Manage User",
    items: [
      {
        title: "All Users",
        url: "/admin/dashboard/all-users",
        component: AllUsers,
        icon: "w",
      },
      {
        title: "All Agents",
        url: "/admin/dashboard/all-agents",
        component: AllUsers,
        icon: "w",
      },
      {
        title: "Update User Role",
        url: "/admin/dashboard/update-user-role",
        component: UpdateUserRole,
        icon: "w",
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
        icon: "w",
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
        icon: "w",
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
        icon: "w",
      },
      {
        title: "Add Money",
        url: "/admin/dashboard/add-money-wallet",
        component: AddMoneyWallet,
        icon: "w",
      },
      {
        title: "Block Wallet",
        url: "/admin/dashboard/block-wallet",
        component: BlockWallet,
        icon: "w",
      },
    ],
  },
];
