import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

type CustomPaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export function CustomPagination({ totalPages, currentPage, onPageChange }: CustomPaginationProps) {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {page > 1 && (
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(page - 1)}
            />
          )}
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              isActive={page === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {totalPages > 5 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        <PaginationItem>
          {page < totalPages && (
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(page + 1)}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
