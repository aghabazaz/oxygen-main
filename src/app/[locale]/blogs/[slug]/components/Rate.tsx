import Image from "next/image";
import { useState } from "react";
import share from "~/public/icons/share.svg";
import star from "~/public/icons/star.svg";
import starFill from "~/public/icons/starfill.svg";
import Links from "./Links";

const Rate = ({ buttonClassName }: { buttonClassName?: string }) => {
  const [showStars, setShowStars] = useState(false);
  // const { data } = useSettings();

  return (
    <>
      {/* desktop */}
      <div className="w-full hidden md:flex gap-4 justify-start items-center my-5">
        <div className="flex w-full h-11">
          <div className="w-10 h-10 border border-gray-60 flex items-center justify-center rounded-8 bg-gray-20 ">
            <Image src={starFill} alt="rateStar" />
          </div>
          <div className={`flex ml-3 items-center justify-between`}>
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
          </div>
        </div>
        <div className="flex items-center border  rounded-8 border-gray-60 h-11 w-full">
          <button className="w-10 h-8 border-r flex items-center justify-center  bg-gray-20 ">
            <Image src={share} alt="rateStar" />
          </button>
          <Links />
        </div>
      </div>
      {/* Mobile */}
      <div className="w-full flex md:hidden gap-4  justify-center md:justify-start items-center my-5">
        <div
          className={` px-2 h-12 flex items-center   relative justify-center rounded-8 overflow-hidden transition-[max-width] duration-1000 ease-in-out  bg-gray-20 w-full  ${showStars ? "max-w-[900px] " : "max-w-12   "} ${buttonClassName} `}
        >
          <button
            type="button"
            onClick={() => setShowStars(!showStars)}
            className={`absolute z-10 ${showStars ? "left-4" : "left-2"}`}
          >
            <Image src={starFill} alt="rateStar" />
          </button>

          <div
            className={`flex pl-12 items-center justify-between transition-opacity duration-500 delay-200 ease-out ${showStars ? "opacity-100 " : "opacity-0 "}`}
          >
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
            <Image src={star} alt="starRate" />
          </div>
        </div>

        <button
          className={`h-12 flex items-center justify-center rounded-8 delay-500 transition-opacity duration-100  bg-gray-20 w-12 ${showStars ? "opacity-0 max-w-0" : "opacity-100 max-w-[999px]"}  ${buttonClassName} `}
        >
          <Image src={share} alt="rateStar" />
        </button>
      </div>
    </>
  );
};

export default Rate;
