"use client";
import { useLocale, useTranslations } from "next-intl";
import Location from "../Svg/Location.svg";
import Mail from "../Svg/Mail.svg";
import Phone from "../Svg/Phone.svg";
import { useSettings } from "../api/useSettings";
import { useMemo } from "react";
// import { getLocale, getTranslations } from "next-intl/server";

const CompanyInformation = ({
  className = "text-white ",
}: {
  className?: string;
}) => {
  const { data } = useSettings();
  const locale = useLocale();
  const t = useTranslations("contactUs");
  const address: string = useMemo(
    () => (locale === "fa" ? data.fa_address : data.en_address),
    [locale]
  );

  return (
    <div
      id="info"
      className={` flex flex-col w-fit items-start h-fit gap-2 ${className}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-start md:items-center gap-2 justify-start md:justify-center h-full">
          <Location className="w-10 md:w-5" />
          <p>
            {t("Central office")}: <span>{address}</span>
          </p>
        </div>
        <span className="w-full md:hidden bg-yellow h-1 rounded-full"></span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8  w-full">
        <div className="flex gap-2 items-center">
          <Mail className="w-5" />
          <a className="text-base" href={data.email}>
            {data.email}
          </a>
        </div>
        <div className="flex gap-2 items-center ">
          <Phone className="w-5" />
          <a dir="ltr" className="text-base" href={`tel:${data.phone}`}>
            {data.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
