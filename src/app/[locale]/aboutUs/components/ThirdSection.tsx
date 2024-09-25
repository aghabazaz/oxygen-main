import Image from "next/image";
import arrowIcon from "~/public/icons/aboutUs/arrow.svg";

const ThirdSection = ({ item }: { item: any }) => {
  return (
    <div className="h-fit relative my-10 md:my-0 lg:h-screen w-full snap-start gap-10 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <div className="w-full relative h-fit mt-14 lg:mt-0 lg:w-1/2">
        <svg
          width="115"
          height="100"
          viewBox="0 0 115 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute lg:hidden top-[-100px] right-20 z-10 "
        >
          <path
            d="M1.5 0.5V32C1.5 40.8366 8.66344 48 17.5 48H97.5C106.337 48 113.5 55.1634 113.5 64V100"
            stroke="#B9B9B9"
            strokeWidth="2"
          />
        </svg>
        <Image
          src={item.cover}
          alt="oxygen"
          width={883}
          height={484}
          className="w-full h-full object-contain relative z-10"
        />
        <Image
          src={arrowIcon}
          alt="oxygen"
          className="h-16 lg:hidden w-auto absolute z-20 top-[calc(100%-32px)] left-5"
        />
      </div>
      <div className="flex w-full lg:w-1/2 flex-col">
        <div className="flex items-baseline relative ">
          <Image
            src={arrowIcon}
            alt="oxygen"
            className="h-16 hidden lg:block w-auto absolute z-20 top-0 -left-20"
          />
          <div className="flex w-full items-baseline ">
            <span className="text-lg lg:text-[50px] mr-2 text-yellow">2</span>
            <div className="w-full bg-yellow relative h-[2px]">
              <div className="absolute w-5 h-5 bg-yellow rounded-full right-0 -top-2"></div>
            </div>
          </div>
        </div>
        <p
          className="text-gray-70  text-base text-justify"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></p>
      </div>
    </div>
  );
};

export default ThirdSection;
