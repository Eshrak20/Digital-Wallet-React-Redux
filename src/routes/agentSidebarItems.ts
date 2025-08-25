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
];
