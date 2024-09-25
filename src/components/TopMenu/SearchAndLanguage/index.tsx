"use client";
import React from "react";
import Language from "./Language";
import Search from "./Search";

const SearchAndLanguage = ({ setIsShowMobile }: { setIsShowMobile?: any }) => {
  return (
    <div className="flex flex-col-reverse w-full gap-3 md:flex-row lg:w-1/5 lg:h-1/3 lg:items-center lg:justify-center">
      <Language />
      <div className="hidden w-1 h-full bg-yellow md:block"></div>
      <Search setIsShowMobile={setIsShowMobile} />
    </div>
  );
};

export default SearchAndLanguage;
