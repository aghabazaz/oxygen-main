import Image from "next/image";
import leftArrowIcon from "~/public/icons/welcomeSlider/yellowArrow.svg";
import arrowIcon from "~/public/icons/aboutUs/arrow.svg";

const SecondSection = ({ item }: { item: any }) => {
  return (
    <div className="h-full lg:h-screen w-full snap-start justify-end pt-1 gap-10 flex lg:flex-row flex-col-reverse  overflow-hidden items-center lg:justify-between">
      <div className="flex w-full items-start lg:w-1/2 flex-col">
        <div className="flex w-full items-baseline ">
          <span className="text-lg lg:text-[50px] mr-2 text-yellow">1</span>
          <div className="w-full bg-yellow relative h-[2px]">
            <div className="absolute w-5 h-5 bg-yellow rounded-full right-0 -top-2"></div>
          </div>
        </div>
        <p className="text-gray-70 lg:pl-2 pb-5 lg:pb-0  text-base text-justify relative ">
          <Image
            src={leftArrowIcon}
            alt="oxygen"
            className="h-16 w-auto hidden lg:block absolute bottom-16 z-20 -right-20"
          />
          <span dangerouslySetInnerHTML={{ __html: item.description }}></span>
        </p>
      </div>

      <div className="w-full  relative h-fit lg:w-1/2">
        <Image
          src={item.cover}
          alt="oxygen-official"
          width={850}
          height={474}
          className="w-full object-contain h-auto  relative z-10"
        />
        <Image
          src={arrowIcon}
          alt="oxygen"
          className="h-16 left-5 w-auto lg:hidden top-[calc(100%-32px)]  absolute  z-20 "
        />
        <svg
          width="900"
          height="1080"
          viewBox="0 0 1305 1080"
          fill="none"
          className="absolute hidden lg:block top-full   right-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 -1517H284.5C315.428 -1517 340.5 -1491.93 340.5 -1461V-988.5C340.5 -957.572 365.572 -932.5 396.5 -932.5H1246C1276.93 -932.5 1302 -907.428 1302 -876.5V121.5C1302 152.428 1276.93 177.5 1246 177.5H396.5C365.572 177.5 340.5 202.572 340.5 233.5V1135.5C340.5 1166.43 365.572 1191.5 396.5 1191.5H1246C1276.93 1191.5 1302 1216.57 1302 1247.5V1553"
            stroke="#B9B9B9"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};

export default SecondSection;
