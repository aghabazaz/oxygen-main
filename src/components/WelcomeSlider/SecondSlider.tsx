import Image from "next/image";
import React from "react";
import stoneTwo from "~/public/images/welcomeSlider/stoneTwo.jpg";
import oxygenPng from "~/public/images/welcomeSlider/oxygen.png";

const SecondSlider = () => {
  return (
    <div className="w-full max-h-fit">
      <Image
        src={stoneTwo}
        className="w-full h-svh lg:h-screen object-cover"
        alt="stoneTwo"
      />
      <div className="h-full main-content bg-gray-60 w-full ">
        <Image
          src={oxygenPng}
          alt="oxygenLogo"
          className=" w-[300px] xl:w-[300px]  h-auto absolute left-[calc(50%-100px)] lg:left-[calc(50%+300px)] bottom-[200px] lg:bottom-[130px] z-20"
        />
      </div>
    </div>
  );
};

export default SecondSlider;
