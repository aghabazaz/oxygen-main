import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const CustomLinkButton = ({ href }: { href: string }) => {
  const t = useTranslations("Index");
  return (
    <Link href={href} className="flex items-center text-gray-60 ">
      {/* <span className="text-2xsm pr-3"></span> */}
      <span className="font-helveticaBold text-base">
        {t("Show all blogs")} +
      </span>
    </Link>
  );
};

export default CustomLinkButton;
