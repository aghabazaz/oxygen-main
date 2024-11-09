import React, { Suspense } from "react";
import { getBlog } from "./api";
import TopPicture from "./components/TopPicture";
import BreadCrumb from "@/components/common/BreadCrumb";
import CustomerRequest from "./components/CustomerRequest";


export async function generateMetadata(context: any) {
    const blogId = context.searchParams.blogId;
    const { data: blog } = await getBlog(blogId);

    return {
        title: blog?.meta_title || "Oxygen",
        description:blog?.meta_description || "generateMetadata"
    };
}
const Blog = async (context: any) => {
    const { data: blog } = await getBlog(context.searchParams.blogId);
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

            <CustomerRequest />
        </div>
    );
};

export default Blog;

