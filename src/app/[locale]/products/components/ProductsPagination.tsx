"use client";

import Pagination from "@/components/common/Pagination";

const ProductsPagination = ({
  total,
  currentPage,
}: {
  total: number;
  currentPage: number;
}) => {
  return (
    <div className="w-full h-fit  flex items-center justify-center">
      <Pagination
        totalCount={total}
        currentPage={currentPage}
        onPageChange={() => console.log("hello")}
        pageSize={10}
      />
    </div>
  );
};

export default ProductsPagination;
