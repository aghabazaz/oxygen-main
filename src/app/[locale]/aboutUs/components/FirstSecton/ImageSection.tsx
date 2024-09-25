import Image from "next/image";
import React from "react";
import CircleAnimated from "./CircleAnimated";
import aboutUsBgMobile from "~/public/images/about/aboutMobile.png";
import aboutUsBg from "~/public/images/about/aboutUs1.png";

const ImageSection = () => {
  return (
    <div className=" w-full relative h-full lg:h-full lg:w-3/4 flex justify-end items-end">
      <Image
        src={aboutUsBg}
        alt="about-us-oxygen"
        width={1448}
        height={815}
        className="w-full hidden lg:block "
      />
      <Image
        src={aboutUsBgMobile}
        alt="about-us-oxygen"
        width={1448}
        height={815}
        className="w-full h-3/4 lg:hidden"
      />
      <CircleAnimated />
    </div>
  );
};

export default ImageSection;
