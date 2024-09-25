import React from "react";
import LinkButton from "../common/LinkButton";
import { ISliderData } from "./blocks.types";
import { useLocale, useTranslations } from "next-intl";

const ExportInfo = ({
  exportData,
  activeIndex,
}: {
  exportData: ISliderData | undefined;
  activeIndex: number;
}) => {
  const locale = useLocale();
  const t = useTranslations("Blocks");
  return exportData ? (
    <div
      id="right-section-blocks"
      className="md:flex flex-col hidden h-full items-start justify-center mr-2 min-w-[27%] gap-4"
    >
      <span className="bg-yellow w-fit px-2 text-md">{t("For Export")}</span>
      <div className="flex justify-between w-full">
        <div
          className={`border-yellow w-1/2 ${locale === "fa" ? "border-l-5" : "border-r-5"} p-3 flex flex-col gap-2 items-start`}
        >
          <p className="text-xs 2xl:text-sm text-nowrap text-gray-80 ">
            {t("water absorption")}
          </p>
          {exportData.rightData.rightInfo.meta.map((element) => {
            return (
              <p
                key={element}
                className="text-2xsm text-gray-60 font-helveticaLight"
              >
                {element}
              </p>
            );
          })}
        </div>
        <div
          className={`border-yellow ${locale === "fa" ? "border-l-5" : "border-r-5"} p-3 flex flex-col gap-2 items-start`}
        >
          <p className="text-xs 2xl:text-sm  w-1/2  text-gray-80 text-nowrap ">
            {t("Density Kg/m3")}
          </p>
          {exportData.rightData.leftInfo.meta.map((element) => {
            return (
              <p
                key={element}
                className="text-2xsm  bg-gray-light text-gray-60 font-helveticaLight"
              >
                {element}
              </p>
            );
          })}
        </div>
      </div>
      <LinkButton
        className="w-full"
        href={"/" + locale + exportData.href}
        title={t("see more")}
      />
    </div>
  ) : null;
};

export default ExportInfo;
