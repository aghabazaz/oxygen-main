"use client";
import SectionTitle from "@/components/common/SectionTitle";
import Image from "next/image";
import leftLineIcon from "~/public/icons/blocks/leftLine.svg";
import rightLineIcon from "~/public/icons/blocks/rightLine.svg";
import picOne from "~/public/images/blocks/picOne.png";
import picThree from "~/public/images/blocks/picThree.png";
import picTwo from "~/public/images/blocks/picTwo.png";
import BlockSlider from "./Slider";
import { ISliderData } from "./blocks.types";
import topLeftIcon from "~/public/icons/welcomeSlider/topLineLeft.svg";
import bottomRightIcon from "~/public/icons/welcomeSlider/bottomLineRight.svg";
import { useBlocks } from "../api/useBlocks";
import { useLocale, useTranslations } from "next-intl";

const Blocks = () => {
  const locale = useLocale();
  const { data } = useBlocks(locale);

  const t = useTranslations("Index");
  return (
    <section
      id="blocksSection"
      className="h-svh lg:h-screen snap-start  bg-gray-light  relative w-full px-8 lg:px-32 "
    >
      <div className="absolute w-1/2 h-fit lg:hidden top-[calc(100%-14px)] right-0 z-10">
        <Image src={bottomRightIcon} alt="" className="w-full h-full" />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row items-start relative justify-around">
        <div className="w-full h-1 lg:hidden"></div>
        <div className="w-full lg:w-1/2 h-fit  lg:static lg:h-full  top-0 ">
          <SectionTitle
            title={t("Blocks")}
            className="absolute top-[14px] lg:top-[82px]  z-10 2xl:top-24 "
          />
          <Image
            src={leftLineIcon}
            alt="oxygenBlock"
            className={`ml-[1px] w-full hidden lg:block ${locale === "fa" ? "flip" : ""}`}
          />
          <div className="lg:hidden w-1/2 left-0  absolute top-0">
            <Image src={topLeftIcon} alt="" />
          </div>
        </div>
        <div className="lg:absolute relative  flex flex-col-reverse justify-around lg:flex-row items-center h-[90%] lg:h-full w-full">
          <BlockSlider sliderData={data} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col absolute top-0 lg:bottom-0 lg:static  h-fit items-end  justify-end lg:h-full">
          <Image
            src={rightLineIcon}
            alt="oxygenBlock"
            className={`w-1/2 right hidden lg:block absolute z-30 -bottom-[130px] ${locale === "fa" ? "flip" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Blocks;
