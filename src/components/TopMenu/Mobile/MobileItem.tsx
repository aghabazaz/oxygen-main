"use client";
import Image from "next/image";
import React, { useState } from "react";
import hamburgerMenu from "~/public/icons/menu/hamburger.svg";
import { menuData } from "../menuData";
import { usePathname, useRouter } from "next/navigation";
import SocialMedia from "@/components/Footer/SocialMedia";
import SearchAndLanguage from "../SearchAndLanguage";

const MobileItem = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isShowMobile, setIsShowMobile] = useState(false);

  return (
    <div className="md:hidden ">
      <button
        type="button"
        className="w-fit h-fit"
        onClick={() => setIsShowMobile(!isShowMobile)}
      >
        <Image src={hamburgerMenu} alt="oxygenHamburger" />
      </button>
      <div
        className={`right-0    h-svh absolute bottom-0  bg-white top-20 left-0 duration-300 transition-[max-width] ease-in-out overflow-hidden z-30 ${isShowMobile ? "max-w-[999px]" : "max-w-0"}`}
      ></div>
    </div>
  );
};

export default MobileItem;
