"use client";
import Pagination from "@/components/common/Pagination";
import React from "react";

const BlogsPagination = ({
  totalCount,
  currentPage,
}: {
  currentPage: number;
  totalCount: number;
}) => {
  return (
    <div className="w-full h-fit  flex items-center justify-center">
      <Pagination
        totalCount={totalCount}
        currentPage={currentPage}
        onPageChange={() => console.log("hello")}
        pageSize={10}
      />
    </div>
  );
};

export default BlogsPagination;
