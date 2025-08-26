import { Link } from "react-router-dom";
import {
  HouseIcon,
  InfoIcon,
  StarIcon,
  DollarSignIcon,
  HelpCircleIcon,
  PhoneIcon,
  UserIcon,
  MenuIcon,
  LogOutIcon,
  Wallet2Icon,
  AlignStartVertical,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetMyProfileQuery } from "@/redux/api/userApi";
import { authApi, useLogoutUserMutation } from "@/redux/api/authApi";
import { Skeleton } from "@/components/ui/skeleton";
import { useDispatch } from "react-redux";
import { handleApiError } from "@/utils/handleApiError";
import { toast } from "react-toastify";
import { getDashboardPath } from "@/utils/getDashboardPath";
import { ModeToggle } from "./ModeToggler";

const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon },
  { href: "/about", label: "About", icon: InfoIcon },
  { href: "/feature", label: "Feature", icon: StarIcon },
  { href: "/pricing", label: "Pricing", icon: DollarSignIcon },
  { href: "/faq", label: "FAQ", icon: HelpCircleIcon },
  { href: "/contact", label: "Contact", icon: PhoneIcon },
];

export default function Navbar() {
  const { data: profileData, isLoading } = useGetMyProfileQuery();
  const [logout] = useLogoutUserMutation();
  const dispatch = useDispatch();
  const userData = profileData?.data?.data;

  const isAuthenticated = !!userData;

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(authApi.util.resetApiState());
      toast.error("Logout successfully!");
    } catch (err) {
      console.error("Failed to logout:", err);
      handleApiError(err);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full border-b border-gray-800 bg-black/95 backdrop-blur-sm text-white z-50 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-xl font-bold flex items-center gap-2"
            style={{ color: "#E2136E" }}
          >
            <div className="w-8 h-8 rounded-md bg-[#E2136E] flex items-center justify-center text-white font-bold">
              DW
            </div>
            <span className="hidden sm:inline-block">Digital Wallet</span>
          </Link>
        </div>

        {/* Middle: Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navigationLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={link.href}
                      className="flex items-center gap-2 px-3 py-2 font-medium text-white hover:text-[#E2136E] transition-colors rounded-md hover:bg-gray-800/50"
                    >
                      {Icon && <Icon size={16} className="text-gray-400" />}
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Auth Section */}
        <div className="flex items-center gap-2">
          {isLoading ? (
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-20 rounded-md bg-gray-800" />
              <Skeleton className="h-8 w-20 rounded-md bg-gray-800" />
            </div>
          ) : !isAuthenticated ? (
            <>
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#E2136E]"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#E2136E] hover:bg-[#b01057] text-white">
                  Sign Up
                </Button>
              </Link>
              <ModeToggle />
            </>
          ) : (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                  <Avatar className="border border-gray-700 cursor-pointer hover:border-[#E2136E] transition-colors">
                    <AvatarImage
                      src={
                        userData.profilePic || "https://via.placeholder.com/40"
                      }
                      alt={userData.name}
                    />
                    <AvatarFallback className="bg-gray-800">
                      <UserIcon className="text-gray-400" size={18} />
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="bg-neutral-900 text-white border-gray-700 w-56"
                >
                  <DropdownMenuLabel className="flex flex-col p-4">
                    <span className="font-semibold">{userData.name}</span>
                    <span className="text-sm text-gray-400 font-normal">
                      {userData.email}
                    </span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  {userData && (
                    <>
                      <DropdownMenuItem
                        asChild
                        className="cursor-pointer focus:bg-gray-800 focus:text-white"
                      >
                        <Link
                          to={getDashboardPath(userData.role)}
                          className="flex items-center gap-2"
                        >
                          <AlignStartVertical size={16} />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}

                  <DropdownMenuItem
                    asChild
                    className="cursor-pointer focus:bg-gray-800 focus:text-white"
                  >
                    <Link to="/settings" className="flex items-center gap-2">
                      <Wallet2Icon size={16} />
                      Wallet
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-400 focus:bg-gray-800 focus:text-red-300"
                  >
                    <LogOutIcon size={16} className="mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ModeToggle />
            </>
          )}
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-[#E2136E] hover:bg-gray-800/50"
              >
                <MenuIcon size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-56 bg-neutral-900 p-3 rounded-lg border-gray-700"
            >
              <div className="flex flex-col gap-2">
                {navigationLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={index}
                      to={link.href}
                      className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#E2136E] transition-colors rounded-md hover:bg-gray-800/50"
                    >
                      {Icon && <Icon size={16} className="text-gray-400" />}
                      {link.label}
                    </Link>
                  );
                })}

                <div className="border-t border-gray-700 my-2"></div>

                {isLoading ? (
                  <div className="flex flex-col gap-2 p-2">
                    <Skeleton className="h-8 w-full rounded-md bg-gray-800" />
                    <Skeleton className="h-8 w-full rounded-md bg-gray-800" />
                  </div>
                ) : !isAuthenticated ? (
                  <div className="flex flex-col gap-2">
                    <Link to="/login">
                      <Button
                        variant="outline"
                        className="w-full text-black border-gray-700 hover:bg-gray-800"
                      >
                        Login
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button className="w-full bg-[#E2136E] hover:bg-[#b01057] text-white">
                        Sign Up
                      </Button>
                    </Link>
                    <ModeToggle />
                  </div>
                ) : (
                  <>
                    <div className="px-3 py-2 text-sm text-gray-400">
                      Signed in as {userData.name}
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#E2136E] transition-colors rounded-md hover:bg-gray-800/50"
                    >
                      <UserIcon size={16} className="text-gray-400" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#E2136E] transition-colors rounded-md hover:bg-gray-800/50"
                    >
                      <UserIcon size={16} className="text-gray-400" />
                      Settings
                    </Link>
                    <ModeToggle />

                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-3 py-2 text-red-400 hover:text-red-300 transition-colors rounded-md hover:bg-gray-800/50 text-left"
                    >
                      <LogOutIcon size={16} className="text-gray-400" />
                      Logout
                    </button>
                  </>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
