"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "./menuData";
import { useLocale, useTranslations } from "next-intl";

const Items = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <div className="md:flex hidden items-center justify-start gap-5 xl:gap-8">
      {menuData.map((item) => (
        <div className="" key={item.path}>
          <Link
            href={`/${locale}${item.path}`}
            className="text-gray-60 text-2xsm 2xl:text-xs group relative ease-linear delay-300 "
          >
            <>
              <span className="group-hover:text-gray-80 ease-linear duration-300">
                {t(item.label)}
              </span>
              <span
                className={`absolute -bottom-3 left-0 group-hover:max-w-56 ease-linear duration-300 w-full h-1 max-w-0 rounded-lg bg-yellow ${pathname.replace(locale, "") === item.path || pathname.replace("/" + locale, "") === item.path ? "max-w-56" : "max-w-0"}`}
              ></span>
            </>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Items;
