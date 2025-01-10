"use client";
import Image from "next/image";
import cube from "~/public/icons/quarries/cube.svg";
import cubePlusVector from "~/public/icons/quarries/cubePlusVector.svg";
import polyhedralCube from "~/public/icons/quarries/polyhedralCube.svg";
import SectionTitle from "../common/SectionTitle";
import ImageSidebar from "./ImageSidebar";
import rightLinemobile from "~/public/icons/quarries/rightLinemobile.svg";
import LinkButton from "../common/LinkButton";
import LineWithLuminRing from "../Svg/LineWithLuminRing";
import { useLocale, useTranslations } from "next-intl";
import { useQuarries } from "../api/useQuarries";
const quarriesInfo = [
  {
    title: "Mining",
    icon: polyhedralCube,
  },
  {
    title: "processing",
    icon: cube,
  },
  {
    title: "Export",
    icon: cubePlusVector,
  },
];
const Quarries = () => {
  const locale = useLocale();
  const { data } = useQuarries(locale);
  const t = useTranslations("Index");
  return (
    <section
      id="quarries"
      className="h-svh lg:h-screen items-center  lg:min-h-screen flex justify-center snap-start relative  pt-5 lg:pt-0 lg:py-14  bg-gray-20 w-full px-10 xl:px-32 2xl:px-[158px]"
    >
      <div className="flex  flex-col md:flex-row w-full h-full items-center gap-5 md:gap-9">
        <div className="flex md:mt-24 w-full md:w-1/2 lg:pt-10 2xl:pt-20 flex-col justify-start items-end h-[45svh] lg:h-full">
          <SectionTitle title={data.title} className="w-full  lg:mb-0" />
          <div className="w-full h-full  md:h-[98%] flex items-center justify-between">
            <ImageSidebar querriesImg={data.sections[0].cover || ""} />
          </div>
        </div>
        <div className="w-full md:w-1/2 min-h-[50svh] lg:min-h-full pb-10 lg:pb-0 h-full pr-18  flex flex-col relative items-center xl:pt-24 1370:pt-9 1440:pt-40 justify-center">
          <div className="h-fit flex flex-col mt-8 sm:mt-0 sm:gap-1">
            <h2 className="font-helveticaBold text-xl sm:text-2xl text-gray-80">
              {data.sections[0].title}
            </h2>
            <p
              className="text-2xsm text-justify md:text-sm text-gray-80 sm:text-base"
              dangerouslySetInnerHTML={{ __html: data.sections[0].description }}
            ></p>
            <div className="flex w-full mt-4 gap-5 h-fit items-center ">
              {quarriesInfo.map((info, index) => {
                return (
                  <div
                    key={info.title}
                    className={`flex flex-col md:flex-row items-center gap-1 w-full border-r-[4px] border-yellow pr-3 justify-between ${locale === "fa" ? "first:border-none" : "last:border-none"}`}
                  >
                    <Image
                      src={info.icon}
                      alt={info.title}
                      className={`h-16 2xl:h-20 w-auto`}
                    />
                    <span className="text-gray-60 text-xs">
                      {t(info.title)}
                    </span>
                  </div>
                );
              })}
            </div>
            <LinkButton
              href={`/${locale}/quarries`}
              title={t("see more")}
              className="mt-5 md:hidden z-20"
            />

            <div className="quarries-section flex w-full absolute lg:static top-full  h-fit md:h-full justify-start">
              <Image
                src={rightLinemobile}
                alt="rightLinemobileOxygen"
                className="w-1/2 md:hidden h-auto absolute -top-10 z-10"
              />
              <div className="hidden md:flex  absolute justify-between items-center z-30 with-quarries">
                <div className={`bottom-[87%] absolute w-1/3 `}>
                  <LinkButton
                    title={t("see more")}
                    className="w-full "
                    href={`/${locale}/quarries`}
                  />
                </div>

                <LineWithLuminRing />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quarries;
