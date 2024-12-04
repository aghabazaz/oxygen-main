import Image from "next/image";
import React from "react";
import { TBlogItem } from "../../api/blogs.types";
import authorIcon from "~/public/icons/blogs/author.svg";
import calender from "~/public/icons/blogs/calender.svg";
import { useLocale } from "next-intl";
import { getLocale } from "next-intl/server";
import { convertJalaliToGregorian } from "@/utils/convertJalaliToGregorian";

const TopPicture = async ({
  cover,
  author,
  created_at = new Date().toLocaleString(),
  title,
}: Pick<TBlogItem, "author" | "created_at" | "title" | "cover">) => {
  const locale = await getLocale();
  return (
    <div className="flex flex-col md:flex-row h-full w-full  gap-10 items-center justify-between relative z-10">
      <div className="w-full  md:h-[60vh] relative h-[140px]">
        <Image
          src={cover}
          alt={title}
          className="w-full h-full"
          fill
        />
        <div className="px-10 w-full my-5 md:my-0 md:w-[500px] hidden md:flex flex-col items-center justify-center text-center right-[calc(50%-250px)] md:absolute h-[140px] -bottom-[70px] md:bg-gray-20 rounded-8">
          <h1 className="text-lg text-gray-80">{title}</h1>
          <div
            id="metd-date"
            className="flex items-center gap-2  justify-center"
          >
            <div className="flex items-center gap-1">
              <Image src={calender} alt="calender" />
              <span className="text-gray-60 text-2xsm">
                {locale === "fa"
                  ? new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(convertJalaliToGregorian(created_at)))
                  : new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(created_at))}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={authorIcon} alt="author" />
              <span className="text-gray-60 text-2xsm">{author}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 w-full md:hidden flex flex-col items-center justify-center text-center">
        <h3 className="text-lg text-gray-80 font-bold">{title}</h3>
        <div id="metd-date" className="flex items-center gap-2 justify-center">
          <div className="flex items-center gap-1">
            <Image src={calender} alt="calender" />
            <span className="text-gray-60 text-2xsm">
              {locale === "fa"
                ? new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(convertJalaliToGregorian(created_at)))
                : new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(created_at))}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={authorIcon} alt="author" />
            <span className="text-gray-60 text-2xsm">{author}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicture;
