import type { ISidebarItem } from "@/types/sidebar.type";
import { lazy } from "react";
const AllTrans = lazy(() => import("@/Pages/Dashboard/Admin/Transaction/AllTrans"));

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
];
