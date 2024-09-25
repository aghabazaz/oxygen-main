import Image from "next/image";
import React, { useEffect, useState } from "react";
import picOne from "~/public/images/welcomeSlider/picOne.jpg";
import logo from "~/public/images/logo.png";
import yellowArrow from "~/public/icons/welcomeSlider/yellowArrow.svg";
import { ISlider } from "../api/types";

const Slider = ({ item }: { item: ISlider }) => {
  const [isRendered, setIsRendered] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsRendered(true), 1500);
  }, []);
  return (
    <div className="max-h-fit">
      <div className="w-full">
        <Image
          src={item.image}
          alt="welcomeSliderOne"
          className="w-full h-svh lg:h-screen object-cover"
          width={1920}
          height={1080}
        />

        <div
          className={`absolute main-content w-fit  ${isRendered ? "" : "firstSliderInfo"} lg:w-[200px] xl:w-[300px] bottom-[240px] lg:bottom-[160px]   h-fit left-[calc(50%-100px)] lg:left-[calc(50%+320px)]  text-white   flex  flex-col justify-end gap-5 z-20`}
        >
          <Image src={logo} alt="oxygenLogo" className="w-52 lg:w-80" />
          <div className="flex gap-5 w-full justify-between items-center">
            <Image
              src={yellowArrow}
              alt="yellowArrow"
              className="w-[64px] lg:w-full"
            />
            <div className="flex w-fit flex-col">
              <b className="w-fit text-[38px] lg:text-[60px]  lg:leading-[70px] mb-1">
                {item.title}
              </b>
              <span className="text-[19px] lg:text-[30px] whitespace-nowrap">
                {item.desc}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
