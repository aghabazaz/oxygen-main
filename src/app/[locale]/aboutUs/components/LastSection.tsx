"use client";
import { Ref, forwardRef } from "react";
import { useLocale } from "next-intl";

const LastSection = forwardRef(({ item }: any, ref?: Ref<HTMLDivElement>) => {
  const locale = useLocale();
  return (
    <div className="h-fit mt-10 lg:mt-0 lg:h-screen w-full snap-center sm:snap-start flex items-center justify-center overflow-x-hidden">
      <div
        ref={ref}
        className="bg-gray-20 w-fit lg:mt-0 mt-44 flex items-center justify-center h-fit relative z-0"
      >
        <svg
          width="450"
          height="198"
          viewBox="0 0 547 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-full hidden md:block right-1/4 "
        >
          <path
            d="M544 -350V37.5C544 68.4279 518.928 93.5 488 93.5H58.5C27.5721 93.5 2.5 118.572 2.5 149.5V198"
            stroke="#B9B9B9"
            strokeWidth="3"
          />
        </svg>

        <svg
          width="142"
          height="191"
          viewBox="0 0 142 191"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden absolute z-10 left-1/3 top-[-191px] w-fit"
        >
          <path
            d="M1.5 0.5V14.5C1.5 23.3366 8.66344 30.5 17.5 30.5H124.5C133.337 30.5 140.5 37.6634 140.5 46.5V106.5C140.5 115.337 133.337 122.5 124.5 122.5H17.5C8.66344 122.5 1.5 129.663 1.5 138.5V190.5"
            stroke="#B9B9B9"
            strokeWidth="2"
          />
        </svg>

        <div className="h_iframe-aparat_embed_frame flex justify-center items-center mt-10 w-[90vw] h-60 rounded md:h-[90vh] bg-transparent">
          <iframe
            src={
              locale === "fa"
                ? "https://www.aparat.com/video/video/embed/videohash/v57utxq/vt/frame?titleShow=true"
                : "https://www.youtube.com/embed/k1PkjkzdzEU?si=JX6UGUxZDw-CDLnL"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
});

LastSection.displayName = "LastSection";

export default LastSection;
