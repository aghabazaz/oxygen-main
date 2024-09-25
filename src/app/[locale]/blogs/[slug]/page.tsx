import React, { Suspense } from "react";
import { getBlog } from "./api";
import TopPicture from "./components/TopPicture";
import BreadCrumb from "@/components/common/BreadCrumb";
import ProductImageViewer from "@/app/[locale]/products/[slug]/components/ProductImageViewer";
import CustomerRequest from "./components/CustomerRequest";

const Blog = async (context: any) => {
  const { data: blog } = await getBlog(context.searchParams.blogId);
  const galleryImages = [blog.image1 || blog.cover, blog.image2 || blog.cover];
  return (
    <div className="w-full h-full md:snap-none  bg-white relative ">
      <div className="w-full px-8 xl:px-32 hidden lg:flex  h-14  items-center justify-start">
        <Suspense>
          <BreadCrumb title={blog.title} />
        </Suspense>
      </div>
      <TopPicture
        cover={blog.cover}
        author={blog.author}
        created_at={blog.created_at}
        title={blog.title}
      />
      <div className="pb-0 md:pt-24  px-8 xl:px-32 h-full ">
        <div
          className="text-sm [&>p]:my-10 md:[&>p]:my-5 text-gray-80 text-justify"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></div>
      </div>
      {galleryImages?.map((image, index) => {
        return (
          <div key={index} className="">
            <ProductImageViewer
              isAnimate={false}
              imageSrc={image}
              alt={`${blog.title}-image`}
            />
          </div>
        );
      })}
      <CustomerRequest />
    </div>
  );
};

export default Blog;
