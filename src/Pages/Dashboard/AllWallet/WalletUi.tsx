import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Clock, User } from "lucide-react";
import type { WalletUiProps } from "@/types.type";

const statusColors: Record<string, string> = {
  ACTIVE: "bg-green-100 text-green-700 border-green-300",
  INACTIVE: "bg-red-100 text-red-700 border-red-300",
};

function WalletUi({ data }: WalletUiProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((wallet) => (
        <Card
          key={wallet._id}
          className="shadow-sm border hover:shadow-md transition-all hover:scale-[1.02]"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900 truncate">
              Wallet
            </CardTitle>
            <Badge
              variant="outline"
              className={
                statusColors[wallet.status] ||
                "bg-gray-100 text-gray-700 border-gray-200"
              }
            >
              {wallet.status}
            </Badge>
          </CardHeader>

          <CardContent>
            <div className="space-y-2 text-sm text-gray-700">
              {/* Balance */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-teal-600" />
                  Balance
                </span>
                <span className="font-semibold text-gray-900">
                  ${wallet.balance}
                </span>
              </div>

              {/* User ID */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  User ID
                </span>
                <span className="text-gray-800">
                  {wallet.user}
                </span>
              </div>

              {/* Created Date */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  Created
                </span>
                <span className="text-gray-800">
                  {new Date(wallet.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              {/* Updated Date */}
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  Updated
                </span>
                <span className="text-gray-800">
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
