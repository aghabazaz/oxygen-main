import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileItem";
import hamburgerMenu from "~/public/icons/menu/hamburger.svg";
import Logo from "../Logo";
import { pathnameThatSnapScrollShoudNotHave } from "@/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialMedia from "@/components/Footer/SocialMedia";
import SearchAndLanguage from "../SearchAndLanguage";
import { menuData } from "../menuData";
import { useLocale, useTranslations } from "next-intl";
import { useSnapStartClassNames } from "@/hooks/useSnapStartClassNames";

const MobileNavBar = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const subDirectories = pathname?.split("/").splice(1);
  const t = useTranslations("Index");
  const [isShowMobile, setIsShowMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isShowMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowMobile]);

  const smapStartClassNames = useSnapStartClassNames();

  return (
    <>
      <nav
        className={`w-full shadow-lg lg:hidden ${smapStartClassNames} h-20 z-50 px-0 mt-10 top-0 xsm:mt-0`}
      >
        <div className="relative top-0 z-50 flex items-center justify-between w-full h-20 gap-5 px-5 bg-white shadow-lg md:w-fit">
          <button
            type="button"
            className="relative z-40 w-fit h-fit"
            onClick={() => setIsShowMobile(!isShowMobile)}
          >
            <Image src={hamburgerMenu} alt="oxygenHamburger" />
          </button>
          <Logo />
        </div>
      </nav>
      <div
        className={`absolute lg:hidden bg-white top-0 bottom-0 duration-300 transition-[max-width] ease-in-out z-30 w-full right-0 left-0 overflow-hidden h-screen ${isShowMobile ? "max-w-[999px]" : "max-w-0"}`}
      >
        <div className="flex flex-col justify-between w-full p-10 mt-20 h-svh">
          <div className="flex flex-col">
            <div className="mb-10">
              <SearchAndLanguage setIsShowMobile={setIsShowMobile} />
            </div>
            <ul className="flex flex-col w-full gap-2 sm:gap-5">
              {menuData.map((item) => {
                return (
                  <li key={item.label} className="relative pr-3 w-fit">
                    <span
                      className="text-xs cursor-pointer text-gray-60 sm:text-sm"
                      onClick={() => {
                        router.push("/" + locale + item.path);
                        setIsShowMobile(false);
                      }}
                    >
                      {t(item.label)}
                    </span>
                    <span
                      className={`absolute -bottom-1 left-0 ease-linear duration-300 w-full h-1 rounded-lg bg-yellow ${pathname.replace(locale, "") === item.path || pathname.replace("/" + locale, "") === item.path ? "max-w-28" : "max-w-0"}`}
                    ></span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="pb-20">
            <SocialMedia fillSvgColor="#7A7A7A" className="justify-between" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
