"use client";
import Image from "next/image";
import Cama from "~/public/images/footer/cama.png";
import footerLogo from "~/public/images/footer/logo.png";
import footerLogoText from "~/public/images/footer/logoText.png";
import ArrowTop from "../Svg/ArrowTop.svg";
import { scrollTop } from "@/utils/scroll";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("footer");
  return (
    <div className="w-full h-full bg-gray-40 flex mt-10 relative  justify-center items-center">
      <button
        type="button"
        onClick={scrollTop}
        className="bg-yellow  flex items-center justify-center absolute right-[calc(50%-28px)] top-[-14px] md:-top-7 rounded-full w-8 h-8 md:w-14 md:h-14"
      >
        <ArrowTop className="w-[12.5px] md:w-[22.5px] h-auto" />
      </button>
      <div className="w-fit md:w-1/2 flex flex-col gap-5 items-center">
        <div className="flex w-full  items-center justify-between">
          <div className="flex w-full items-center gap-3">
            <Image
              src={footerLogo}
              alt="oxygenLogo"
              className="h-[105px] md:h-[90px] w-auto"
            />
            <Image
              src={footerLogoText}
              alt="oxygenLogoText"
              className="h-7 w-auto"
            />
          </div>
          <Image
            src={Cama}
            alt="oxygen"
            className="h-8 hidden md:block w-auto"
          />
        </div>
        <p className="text-base hidden md:block w-full text-gray-80 mb-16 text-justify">
          {t("index")}
        </p>
      </div>
    </div>
  );
};

export default About;
