"use client";
import Image from "next/image";
import { Ref, forwardRef, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import blogsBackground from "~/public/images/blogs/blogsBackground.svg";
import blogsBackgroundMobile from "~/public/images/blogs/blogsBgMobile.png";
import SectionTitle from "../common/SectionTitle";
import BlogItem from "./BlogItem";
import CustomLinkButton from "./CustomLinkButton";
import { swiperBreakpoints } from "./constants";
import CustomPaginationAndNavigation from "../common/CustomPaginationAndNavigation";
import { useBlogs } from "../api/useBlogs";
import { TBlogItem } from "@/app/[locale]/blogs/api/blogs.types";
import { useLocale, useTranslations } from "next-intl";

const Blogs = forwardRef(({}, ref?: Ref<SVGSVGElement>) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();
  const t = useTranslations("Index");
  const { data } = useBlogs(locale);
  return (
    <section
      id="blogs"
      className="h-svh lg:h-screen  lg:pt-14 bg-gray-20 lg:bg-white  flex flex-col justify-between snap-start relative w-full "
    >
      <div className="flex py-5 items-end max-h-[90px] bg-white justify-start w-full lg:h-full px-10 md:px-32 ">
        <SectionTitle title={t("Blogs&News")} className="" />
      </div>

      <div className="relative z-30 h-full">
        <Image
          src={blogsBackground}
          alt="blogsBackground"
          className="w-full object-cover hidden lg:block"
        />
        <Image
          src={blogsBackgroundMobile}
          alt="blogsBackground"
          className="w-full h-[400px] lg:hidden"
        />
        <div className="absolute w-full px-8 md:px-40 2xl:px-60 h-full top-[20svh] lg:top-[50px] 2xl:top-[20vh] ">
          <Swiper
            loop={true}
            breakpoints={swiperBreakpoints}
            slidesPerView={3}
            className="h-[500px] w-full flex items-center justify-between "
            onSlideChangeTransitionEnd={(e) => {
              setActiveIndex(e.realIndex);
            }}
          >
            {data.slice(0, 3).map((blog: TBlogItem) => {
              return (
                <SwiperSlide className="w-full" key={blog.id}>
                  <BlogItem blog={blog} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div
        id="footer-section"
        className="h-fit pb-5 md:pt-0 flex-col flex lg:flex-row md:h-full w-full items-center lg:items-end  xl:pb-5 2xl:pb-10 justify-center"
      >
        <CustomLinkButton href={`/${locale}/blogs`} />
        <CustomPaginationAndNavigation
          swiperLength={3}
          activeIndex={activeIndex}
          className="w-full   h-10 flex justify-center lg:hidden  select-none"
          handleNextClick={() => swiperRef.current?.swiper.slideNext()}
          handlePrevClick={() => swiperRef.current?.swiper.slidePrev()}
        />
      </div>
    </section>
  );
});

Blogs.displayName = "Blogs";

export default Blogs;
