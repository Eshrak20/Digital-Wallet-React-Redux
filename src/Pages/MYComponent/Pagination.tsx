import { Button } from "@/components/ui/button";
import type { PaginationProps } from "@/types/PaginationProps.type";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalItems,
  perPage = 9, //*If per page is not send from the parent
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / perPage);
  if (totalPages <= 1) return null;

  return (
    <div className="flex  items-center justify-center gap-2 mt-6">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const page = index + 1;
        return (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        );
      })}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
