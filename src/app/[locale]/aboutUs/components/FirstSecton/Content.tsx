import Image from "next/image";
import arrowIcon from "~/public/icons/aboutUs/arrow.svg";
import Counter from "../Counter";
import { useLocale, useTranslations } from "next-intl";

const Content = () => {
  const t = useTranslations("Index");
  const locale = useLocale();
  console.log("🚀 ~ Content ~ cale:", locale);
  return (
    <div className="relative flex flex-col items-start w-full my-5 md:my-0 lg:w-fit 2xl:mt-14">
      <Image
        src={arrowIcon}
        alt="oxygen"
        className={`w-auto h-16 ${locale === "fa" ? "flip" : ""}`}
      />
      <h3 className="relative mb-3 text-2xl font-helveticaBold text-gray-80 2xl:mb-0">
        {t("aboutUs")}
        <svg
          width="900"
          height="740"
          viewBox="0 0 1319 740"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute hidden lg:block -top-14 ${locale === "fa" ? "flip" : ""}`}
        >
          <g clipPath="url(#clip0_767_811)">
            <rect
              width="1920"
              height="6475"
              transform="translate(-135 -629)"
              fill="none"
            />
            <rect x="-135" y="-629" width="1920" height="6478" fill="none" />
            <path
              d="M17.5 20H301.5C332.428 20 357.5 45.0721 357.5 76V548.5C357.5 579.428 382.572 604.5 413.5 604.5H1263C1293.93 604.5 1319 629.572 1319 660.5V1658.5C1319 1689.43 1293.93 1714.5 1263 1714.5H413.5C382.572 1714.5 357.5 1739.57 357.5 1770.5V2215"
              stroke="#B9B9B9"
              strokeWidth="3"
            />
          </g>
          <defs>
            <clipPath id="clip0_767_811">
              <rect
                width="1920"
                height="6475"
                fill="white"
                transform="translate(-135 -629)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="281"
          height="169"
          viewBox="0 0 281 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute lg:hidden  top-[100%]"
        >
          <path
            d="M0 1.5H264C272.837 1.5 280 8.66344 280 17.5V127C280 135.837 272.837 143 264 143H183C174.163 143 167 150.163 167 159V169"
            stroke="#B9B9B9"
            strokeWidth="3"
          />
        </svg>
      </h3>
      <span className="flex items-center text-xl text-gray-60 font-helveticaBold">
        <Counter from={0} to={9000} />
        {locale === "fa" ? (
          <small>متر مربع</small>
        ) : (
          <>
            m<sup>2 </sup>
          </>
        )}
      </span>
      <span className="text-lg text-yellow font-helveticaBold">
        {t("BLOCK YARD")}
      </span>
    </div>
  );
};

export default Content;
