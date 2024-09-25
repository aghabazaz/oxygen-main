"use client";

import languageIcon from "~/public/icons/menu/language.svg";
import arrowDown from "~/public/icons/menu/arrowDown.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const options = [
  { value: "en", label: "EN" },
  { value: "fa", label: "فارسی" },
];
const Language = () => {
  const t = useTranslations("Index");
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const changeLocale = (val: string) => {
    router.replace("/" + val);
  };
  return (
    <div className="relative">
      <div
        className="w-fit flex rounded-8 p-2 lg:p-0 items-stretch gap-1 border border-gray-20 lg:border-none flex-row-reverse lg:flex-row justify-center"
        onClick={() => setOpen(!open)}
      >
        <span className={`text-[16px] hidden md:block pr-5 lg:pr-0 text-black`}>
          {options.find((el) => el.value === locale)!.label}
        </span>
        <span
          onClick={() => changeLocale(options[0].value)}
          className={`text-[16px] block md:hidden pr-5 lg:pr-0 ${locale === options[0].value ? "text-black" : "text-gray-40"}`}
        >
          {options[0].label}
        </span>
        <span
          className={`text-[16px] block md:hidden px-5 lg:pr-0 border-l-2 ${locale === options[1].value ? "text-black" : "text-gray-40"}`}
          onClick={() => changeLocale(options[1].value)}
        >
          {options[1].label}
        </span>
        <Image
          src={arrowDown}
          alt="arrow"
          className="rotate-[30deg] lg:rotate-0 mr-1 lg:mr-0"
          width={12}
          height={12}
        />
        <Image src={languageIcon} alt="ln" width={24} height={24} />
      </div>
      {open && (
        <div className="absolute -left-2 top-8 bg-white border border-gray-40 rounded-xsm px-4 w-20 hidden md:block">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => changeLocale(option.value)}
              className="text-[16px] text-gray-60  pr-5 lg:pr-0 my-2 first:border-b-2 border-gray-40 cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Language;
