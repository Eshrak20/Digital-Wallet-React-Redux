import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";
import type { TransactionUiProps } from "@/types/admin.type";

const statusColors: Record<string, string> = {
  COMPLETED: "bg-green-100 text-green-700 border-green-300",
  PENDING: "bg-yellow-100 text-yellow-700 border-yellow-300",
  FAILED: "bg-red-100 text-red-700 border-red-300",
};

function TransactionUi({ data }: TransactionUiProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((tx) => (
        <Card
          key={tx._id}
          className="shadow-sm border hover:shadow-md transition-all hover:scale-[1.02]"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900 truncate">
              {tx.type === "TRANSFER" ? "Money Transfer" : tx.type}
            </CardTitle>
            <Badge
              variant="outline"
              className={
                statusColors[tx.status] ||
                "bg-gray-100 text-gray-700 border-gray-200"
              }
            >
              {tx.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  {tx.type === "TRANSFER" ? (
                    <ArrowUpCircle className="h-4 w-4 text-[#E2136E]" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4 text-teal-600" />
                  )}
                  Amount
                </span>
                <span className="font-semibold text-gray-900">
                  ${tx.amount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-500" />
                  Fee
                </span>
                <span className="text-gray-800">${tx.transaction_fee}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  Date
                </span>
                <span className="text-gray-800">
                  {new Date(tx.createdAt).toLocaleDateString("en-US", {
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

export default TransactionUi;
