export const dynamic = "force-dynamic";

import BreadCrumb from "@/components/common/BreadCrumb";
import React, { Suspense } from "react";
import BlogsPagination from "./components/BlogsPagination";
import { getBlogs } from "./api";
import BlogItem from "@/components/Blogs/BlogItem";
import { getLocale } from "next-intl/server";

const Blogs = async () => {
  const locale = await getLocale();
  const { data } = await getBlogs(locale);
  return (
      <section className="relative w-full snap-start  min-h-screen h-full  pb-10  bg-gray-20 relative px-8 xl:px-32 blog">
        <div className="w-full  h-14 flex items-center  lg:pt-2 justify-start">
          <Suspense>
            <BreadCrumb />
          </Suspense>
        </div>
        {data && (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 my-10 md:grid-cols-3">
            {data.map((blog) => {
              return <BlogItem key={blog.id} blog={blog} />;
            })}
          </div>
        )}
        <BlogsPagination totalCount={data.length} currentPage={1} />
      </section>
  );
};

export default Blogs;
