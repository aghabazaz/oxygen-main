import Image from "next/image";
import { useState } from "react";
import share from "~/public/icons/share.svg";
import star from "~/public/icons/star.svg";
import starFill from "~/public/icons/starfill.svg";
import Telegram from "@/components/Svg/Telegram.svg";
import Whatsapp from "@/components/Svg/Whatsapp.svg";
import YouTube from "@/components/Svg/YouTube.svg";
import Linkedin from "@/components/Svg/Linkedin.svg";
import Instagram from "@/components/Svg/Instagram.svg";
import Link from "next/link";

const Rate = ({ buttonClassName }: { buttonClassName?: string }) => {
  const [showStars, setShowStars] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const fillSvgColor = "#444444";
  return (
    <>
      {/* desktop */}
      <div className="items-center justify-center hidden w-full gap-4 my-5 md:flex md:justify-start">
        <div className="flex items-center justify-center w-9 h-9 rounded-8 bg-gray-20 ">
          <Image src={starFill} alt="rateStar" />
        </div>
        <div className={`flex items-center justify-between`}>
          <Image src={star} alt="starRate" />
          <Image src={star} alt="starRate" />
          <Image src={star} alt="starRate" />
          <Image src={star} alt="starRate" />
          <Image src={star} alt="starRate" />
        </div>
        <button className="flex items-center justify-center w-9 h-9 rounded-8 bg-gray-20 ">
          <Image src={share} alt="rateStar" />
        </button>
      </div>
      {/* Mobile */}
      <div className="flex items-center justify-center w-full gap-4 my-5 md:hidden md:justify-start">
        <div
          className={`  h-12   relative rounded-8 overflow-hidden transition-[max-width] duration-1000 ease-in-out  bg-gray-20 w-full  ${showShare ? "max-w-0" : showStars ? "max-w-[900px] " : "max-w-12   "} ${buttonClassName} `}
        >
          <div className="flex items-center justify-center h-full px-2 ">
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
        </div>

        <div
          className={` h-12   relative  rounded-8 overflow-hidden transition-[max-width] duration-1000 ease-in-out  bg-gray-20 w-full  ${showStars ? "max-w-0" : showShare ? "max-w-[900px] " : "max-w-12 "} ${buttonClassName} `}
        >
          <div className="flex items-center justify-center w-full h-full px-2">
            <button
              type="button"
              onClick={() => setShowShare(!showShare)}
              className={`absolute z-10 ${showShare ? "left-4" : "left-2"}`}
            >
              <Image src={share} alt="rateStar" />
            </button>

            <div
              className={`flex pl-12 items-center justify-between transition-opacity duration-500 delay-200 ease-out ${showShare ? "opacity-100 " : "opacity-0 "}`}
            >
              <div
                className={`flex w-full justify-center gap-4  items-center `}
              >
                <Link href={"/"}>
                  <Telegram className="w-6" fill={fillSvgColor} />
                </Link>
                <Link href={"/"}>
                  <Whatsapp className="w-6" fill={fillSvgColor} />
                </Link>
                <Link href={"/"}>
                  <YouTube className="w-6" fill={fillSvgColor} />
                </Link>
                <Link href={"/"}>
                  <Linkedin className="w-6" fill={fillSvgColor} />
                </Link>
                <Link href={"/"}>
                  <Instagram className="w-6" fill={fillSvgColor} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rate;
