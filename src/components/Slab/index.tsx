"use client";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import SectionTitle from "../common/SectionTitle";
import SlabSlider from "./Slider";
import { useTranslations } from "next-intl";

const Slab = () => {
  const t = useTranslations("Index");
  return (
    <section className="h-svh lg:h-screen flex overflow-hidden flex-col justify-center relative  snap-start pt-5 lg:pt-14  w-full bg-gray-light ">
      <div className="w-full flex items-center h-fit relative lg:h-[85px] px-8  md:px-32">
        <SectionTitle
          title={t("slab & tile")}
          className="mb-5 lg:mb-0 lg:mt-5 items-center"
        />
      </div>
      <div className="h-full w-full relative z-20 ">
        <SlabSlider />
      </div>
    </section>
  );
};

export default Slab;
