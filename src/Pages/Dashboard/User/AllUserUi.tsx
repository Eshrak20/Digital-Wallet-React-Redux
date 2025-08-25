import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import type { User } from "@/types/admin.type";
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  CheckCircle,
  XCircle,
} from "lucide-react";

interface AllUserUiProps<T> {
  data?: T[];
  type: "user" | "agent";
  loading?: boolean;
}

function AllUserUi<T extends User>({ data }: AllUserUiProps<T>) {
  if (!data || data.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item._id}
          className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white transition-all hover:shadow-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-white"
        >
          <div className="flex items-center justify-between mb-3">
           <div>
             <h3 className="font-bold text-lg text-black truncate">
              {item.name} 
            </h3>
            <h6 className="font-bold text-lg text-black truncate">
              {item._id}
            </h6>
           </div>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                item.role === "admin"
                  ? "bg-purple-100 text-purple-800"
                  : item.role === "agent"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {item.role}
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center text-gray-700">
              <Mail className="h-4 w-4 mr-2 text-[#E2136E]" />
              <span className="truncate">{item.email}</span>
            </div>

            <div className="flex items-center text-gray-700">
              <Phone className="h-4 w-4 mr-2 text-[#E2136E]" />
              <span>{item.phone || "Not provided"}</span>
            </div>

            <div className="flex items-center text-gray-700">
              <MapPin className="h-4 w-4 mr-2 text-[#E2136E]" />
              <span className="truncate">{item.address || "Not provided"}</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 mr-1 text-gray-500" />
                Status:
                <span
                  className={`ml-1 ${
                    item.is_active ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.is_active ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex items-center text-sm">
                {item.is_verified ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                    <span className="text-green-600">Verified</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 mr-1 text-red-500" />
                    <span className="text-red-600">Not Verified</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllUserUi;
