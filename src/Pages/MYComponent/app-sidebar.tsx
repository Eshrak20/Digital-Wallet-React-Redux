import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useMyProfileQuery } from "@/redux/api/userApi";

// Import icons (you can use react-icons or similar)
import {
  FiHome,
  FiUser,
  FiSettings,
  FiPieChart,
  FiCalendar,
  FiChevronDown,
  FiLogOut,
  FiMoon,
  FiSun,
  FiBell,
} from "react-icons/fi";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useMyProfileQuery(undefined);
  const location = useLocation();
  const [expandedGroups, setExpandedGroups] = React.useState({});
  const [darkMode, setDarkMode] = React.useState(false);
  const [collapsed, setCollapsed] = React.useState(false);

  const role = userData?.data?.data?.role;

  const data = {
    navMain: getSidebarItems(role),
  };
  // Toggle group expansion
  const toggleGroup = (title: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Icon mapping based on item title
  const getIcon = (title) => {
    const iconMap = {
      Dashboard: <FiHome />,
      Profile: <FiUser />,
      Analytics: <FiPieChart />,
      Settings: <FiSettings />,
      Schedule: <FiCalendar />,
      // Add more mappings as needed
    };

    return iconMap[title] || <FiHome />;
  };

  return (
    <Sidebar
      {...props}
      className={`transition-all duration-300 ${
        darkMode
          ? "dark bg-gray-900"
          : "bg-gradient-to-b from-blue-50 to-indigo-50"
      } ${collapsed ? "w-20" : "w-64"}`}
    >
      <SidebarHeader className="items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
              😊
            </div>
            {!collapsed && (
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                WalletApp
              </span>
            )}
          </Link>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div
                className={`transform transition-transform ${
                  collapsed ? "rotate-180" : ""
                }`}
              >
                ◀
              </div>
            </div>
          </button>
        </div>
      </SidebarHeader>

      {/* User profile section */}
      {!collapsed && (
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
              {userData?.data?.data?.name?.charAt(0) || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 dark:text-white truncate">
                {userData?.data?.data?.name || "User"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {userData?.data?.data?.role || "Member"}
              </p>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FiBell className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      )}

      <SidebarContent className="custom-scrollbar">
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title} className="border-none">
            {!collapsed && (
              <SidebarGroupLabel
                className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-pointer"
                onClick={() => toggleGroup(group.title)}
              >
                <span>{group.title}</span>
                <FiChevronDown
                  className={`transform transition-transform ${
                    expandedGroups[group.title] ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </SidebarGroupLabel>
            )}

            <SidebarGroupContent
              className={
                expandedGroups[group.title] || collapsed ? "" : "hidden"
              }
            >
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`mx-2 my-1 rounded-xl transition-all duration-200 ${
                        location.pathname === item.url
                          ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <Link
                        to={item.url}
                        className="flex items-center px-3 py-3"
                      >
                        <span className="mr-3 text-lg">
                          {getIcon(item.title)}
                        </span>
                        {!collapsed && <span>{item.title}</span>}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer section with theme toggle and logout */}
      <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
        {!collapsed ? (
          <div className="space-y-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center w-full p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <>
                  <FiSun className="mr-3" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FiMoon className="mr-3" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>

            <button className="flex items-center w-full p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiLogOut className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <div className="flex justify-center space-x-0 space-y-2 flex-col items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            <button className="p-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiLogOut />
            </button>
          </div>
        )}
      </div>

      <SidebarRail />

      {/* Custom CSS for scrollbar */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 10px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #475569;
          }
        `}
      </style>
    </Sidebar>
  );
}
