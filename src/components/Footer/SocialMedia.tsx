"use client";

import React, { useEffect } from "react";
import Telegram from "../Svg/Telegram.svg";
import Whatsapp from "../Svg/Whatsapp.svg";
import YouTube from "../Svg/YouTube.svg";
import Linkedin from "../Svg/Linkedin.svg";
import Instagram from "../Svg/Instagram.svg";
import Link from "next/link";
import { getSettingsData } from "@/app/api/layout.api";
import { useSettings } from "../api/useSettings";
import { useTranslations } from "next-intl";

const SocialMedia = ({
  wrapperClassName,
  fillSvgColor = "white",
  className,
}: {
  wrapperClassName?: string;
  fillSvgColor?: string;
  className?: string;
}) => {
  const { data, isLoading, isError } = useSettings();
  const t = useTranslations("contactUs");
  console.log(
    "%c data.telegram",
    "background: #FFF; color: #000;padding: 0.25rem;border-radius: 5px",
    data.telegram
  );
  return (
    <div
      id="socialMedia"
      className={`w-full md:w-fit flex  gap-2 flex-col min-w-52 ${wrapperClassName}`}
    >
      <div className="flex items-baseline justify-center gap-3 w-full">
        <span className="text-base md:text-2xsm  max-w-fit font-helvetica font-medium w-full">
          {t("Follow us")}
        </span>
        <span className="w-full bg-yellow h-1 rounded-full"></span>
      </div>
      <div
        className={`flex w-full justify-center gap-4 md:gap-0  md:justify-between items-center ${className}`}
      >
        <Link href={data.telegram} target="_blank">
          <Telegram className="w-6" fill={fillSvgColor} />
        </Link>
        <Link href={data.whatsapp}>
          <Whatsapp className="w-6" fill={fillSvgColor} />
        </Link>
        <Link href={data.youtube}>
          <YouTube className="w-6" fill={fillSvgColor} />
        </Link>
        <Link href={data.linkedin}>
          <Linkedin className="w-6" fill={fillSvgColor} />
        </Link>
        <Link href={data.instagram}>
          <Instagram className="w-6" fill={fillSvgColor} />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
