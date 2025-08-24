import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
const AllUsers = lazy(() => import("@/Pages/Dashboard/Admin/AllUsers"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "All Users",
        url: "/admin/all-users",
        component: AllUsers,
      },
    ],
  },
];
