import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, User } from "lucide-react";
import type { Commission } from "@/types.type";

interface CommissionUiProps {
  data: Commission[];
}

function AllCommissionUi({ data }: CommissionUiProps) {
  if (!data || data.length === 0) {
    return <p className="text-gray-600">No commissions found!</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((cm) => (
        <Card
          key={cm._id}
          className="shadow-sm border hover:shadow-md transition-all hover:scale-[1.02]"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900 truncate">
              Commission Earned
            </CardTitle>
            <Badge variant="outline" className="bg-teal-100 text-teal-700 border-teal-300">
              Agent
            </Badge>
          </CardHeader>

          <CardContent>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-teal-600" />
                  Amount
                </span>
                <span className="font-semibold text-gray-900">
                  ${cm.amount}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  Agent ID
                </span>
                <span className="text-gray-800 truncate ">
                  {cm.agent_id}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  Date
                </span>
                <span className="text-gray-800">
                  {new Date(cm.createdAt).toLocaleDateString("en-US", {
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

export default AllCommissionUi;
