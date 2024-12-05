import Image from "next/image";
import author from "~/public/icons/blogs/author.svg";
import calender from "~/public/icons/blogs/calender.svg";
import LinkButton from "../common/LinkButton";
import { TBlogItem } from "../../app/[locale]/blogs/api/blogs.types";
import { useLocale, useTranslations } from "next-intl";

const BlogItem = ({ blog }: { blog: TBlogItem }) => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div key={blog.id} className="w-full drop-shadow-xl h-[400px] mb-10">
      <div className=" w-full left-image-pentagon bg-white h-[150px]">
        <Image
          src={blog.cover}
          alt={blog.title}
          className="h-[150px] w-full object-cover right-image-pentagon blog-img"
          width={300}
          height={100}
        />
      </div>
      <div
        id="blog-content"
        className="p-4 flex h-auto lg:h-[300px] flex-col justify-between bg-white"
      >
        <div className="flex flex-col gap-2">
          <h5 className="font-helveticaBold text-[19px] text-gray-80">
            {blog.title}
          </h5>
          <h6 className="text-gray-60 font-helveticaBold text-base">
            {blog.tags}
          </h6>
          <div
            id="metd-date"
            className="flex items-center gap-2  justify-start"
          >
            <div className="flex items-center gap-1">
              <Image src={calender} alt="calender" />
            </div>
            <div className="flex items-center gap-1">
              <Image src={author} alt="author" />
              <span className="text-gray-60 text-2xsm">
                {blog.author || "oxygen stone"}
              </span>
            </div>
          </div>
        </div>

          <p
              className="text-gray-60 max-h-32 hidden lg:block truncate overflow-hidden my-3 text-base"
              dangerouslySetInnerHTML={{ __html: blog.summary }}
          ></p>

        <LinkButton
          href={{
            pathname: `/${locale}/blogs/${blog.title.replaceAll(" ", "-")}`,
            query: {
              blogId: blog.id,
            },
          }}
          title={t("see more")}
          className="mt-5"
        />
      </div>
    </div>
  );
};

export default BlogItem;
