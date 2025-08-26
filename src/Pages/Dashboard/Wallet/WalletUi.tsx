/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Clock, User } from "lucide-react";
import React from 'react';

// Define a type for the wallet data, assuming it has these properties
// This is a placeholder since the original type was external
interface WalletData {
  _id: string;
  balance: number;
  user: string;
  status: 'ACTIVE' | 'INACTIVE' | string;
  createdAt: string;
  updatedAt: string;
}

// Define props for the component
interface WalletUiProps {
  data: WalletData[];
}

// Define the color scheme for different wallet statuses using standard Tailwind colors
// since these are not part of the Shadcn theme variables
const statusColors: Record<string, string> = {
  ACTIVE: "bg-green-500 text-green-50 font-semibold border-green-500",
  INACTIVE: "bg-red-500 text-red-50 font-semibold border-red-500",
};

function WalletUi({ data }: WalletUiProps) {
  return (
    // Main container using background and padding from the theme
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8 bg-background">
      {/* Map through the wallet data to render each card */}
      {data.map((wallet) => (
        <Card
          key={wallet._id}
          // The Card component's style now uses theme variables and a hover effect
          className="bg-card border-2 border-border text-card-foreground rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:border-primary cursor-pointer"
        >
          {/* Card Header with Title and Status Badge */}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
            {/* Card Title uses the primary color from the theme */}
            <CardTitle className="text-xl font-extrabold text-primary truncate">
              Wallet
            </CardTitle>
            {/* Badge styles are adjusted to use the updated status colors and theme variables */}
            <Badge
              variant="outline"
              className={`text-xs uppercase px-3 py-1 rounded-full shadow-inner border ${
                statusColors[wallet.status] || "bg-muted text-muted-foreground border-border"
              }`}
            >
              {wallet.status}
            </Badge>
          </CardHeader>

          {/* Card Content with Wallet Details */}
          <CardContent className="pt-6">
            <div className="space-y-4 text-base text-muted-foreground font-medium">
              {/* Balance */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {/* Icon color uses the primary theme color */}
                  <Wallet className="h-5 w-5 text-primary" />
                  Balance
                </span>
                <span className="text-xl font-bold text-foreground tracking-wide">
                  {/* Dollar sign uses the primary theme color */}
                  <span className="text-primary">$</span>
                  {wallet.balance}
                </span>
              </div>

              {/* User ID */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {/* Icon color uses the muted-foreground theme color */}
                  <User className="h-5 w-5 text-muted-foreground" />
                  User ID
                </span>
                <span className="text-muted-foreground text-sm">{wallet.user}</span>
              </div>

              {/* Created Date */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {/* Icon color uses the muted-foreground theme color */}
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  Created
                </span>
                <span className="text-muted-foreground text-sm">
                  {new Date(wallet.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Updated Date */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3">
                  {/* Icon color uses the muted-foreground theme color */}
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  Updated
                </span>
                <span className="text-muted-foreground text-sm">
                  {new Date(wallet.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default WalletUi;
