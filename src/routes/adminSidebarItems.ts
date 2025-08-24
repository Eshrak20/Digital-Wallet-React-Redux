import AllTrans from "@/Pages/Dashboard/Admin/Transaction/AllTrans";
import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
const AllUsers = lazy(() => import("@/Pages/Dashboard/Admin/Alluser/AllUsers"));

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
  // {
  //   title: "User Management",
  //   items: [
  //     {
  //       title: "Block User",
  //       url: "/admin/block-user",
  //       component: AddTourType,
  //     },
  //     {
  //       title: "Update User Role",
  //       url: "/admin/update-user-role",
  //       component: AddDivision,
  //     },
  //     {
  //       title: "Block User Wallet",
  //       url: "/admin/block-user-wallet",
  //       component: AddTour,
  //     },
  //   ],
  // },
];
