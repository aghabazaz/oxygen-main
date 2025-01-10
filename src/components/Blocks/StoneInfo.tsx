import React from "react";
import { ISliderData } from "./blocks.types";
import LinkButton from "../common/LinkButton";
import { useLocale, useTranslations } from "next-intl";

const StoneInfo = ({ stonInfo }: { stonInfo: ISliderData }) => {
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div
      id="left-section-block"
      className="w-full md:max-w-[27%]  h-fit   z-20 md:-translate-y-0 -translat-y-1/2"
      animation-property="opacity"
      key={Math.random()}
    >
      <div className="flex flex-col rotate-text-header md:h-fit md:items-start md:mt-24 justify-center w-full  md:ml-2 ">
        <span className="text-gray-40  mb-2 text-sm">
          {stonInfo.leftData.header}
        </span>
        <div className="w-fit rotate-text-body">
          <p className="text-black  border-yellow text-[28px]  ">
            {stonInfo.leftData.body}
          </p>
          <div className="w-full h-[5px] bg-yellow my-2"></div>
        </div>
        <p className="text-gray-40 text-sm">{stonInfo.leftData.footer}</p>
        <LinkButton
          className="w-full mt-3 md:hidden"
          href={"/" + locale + stonInfo.href}
          title={t("see more")}
        />
      </div>
    </div>
  );
};

export default StoneInfo;
