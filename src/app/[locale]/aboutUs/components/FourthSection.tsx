import Image from "next/image";
import aboutUsBg3 from "~/public/images/about/aboutUs3.png";
import flag1 from "~/public/images/about/flag1.png";
import flag2 from "~/public/images/about/flag2.png";
import flag3 from "~/public/images/about/flag3.png";
import flag4 from "~/public/images/about/flag4.png";
import leftArrowIcon from "~/public/icons/welcomeSlider/yellowArrow.svg";
import line from "~/public/icons/aboutUs/bottomLine.svg";

const FourthSection = ({ item }: { item: any }) => {
  return (
    <div className="h-fit lg:h-screen w-full snap-start relative gap-10 flex flex-col-reverse lg:flex-row items-center justify-between overflow-hidden">
      <div className="flex items-start  w-full lg:w-1/2 flex-col">
        <div className="flex flex-col lg:flex-row w-full items-center  relative ">
          <div className="flex w-full lg:w-fit">
            <span className="text-lg lg:text-[50px] mr-2 text-yellow ">3</span>
            <svg
              viewBox="0 0 660 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full lg:hidden about-line"
            >
              <path d="M0.5 12.5H648" stroke="#FFC62F" strokeWidth="3" />
              <circle cx="647.5" cy="12.5" r="12.5" fill="#FFC62F" />
            </svg>
          </div>
          <Image
            src={leftArrowIcon}
            alt="oxygen"
            className="h-16 w-auto hidden lg:block absolute top-0 z-20 -right-16"
          />
          <h3 className="text-2xl w-full  font-helveticaBold text-gray-80">
            {/* {item.title} */}
          </h3>
        </div>
        <p
          className="text-gray-70  text-base text-justify"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></p>
        <div className="flex w-full items-center justify-center md:justify-start gap-2 mt-5">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
            <Image src={flag1} alt="flag1" className="w-12 h-12 " />
          </div>
          <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full">
            <Image src={flag2} alt="flag2" className="w-12 h-12 " />
          </div>
          <div className="flex w-14 h-14 bg-white rounded-full items-center justify-center">
            <Image src={flag3} alt="flag3" className="w-12 h-12 " />
          </div>
          <div className="flex w-14 h-14 bg-white rounded-full items-center justify-center">
            <Image src={flag4} alt="flag4" className="rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-fit relative mt-24 lg:mt-0 lg:h-fit lg:w-1/2">
        <Image
          src={item.cover}
          alt="oxygen"
          width={928}
          height={523}
          className="w-auto object-contain lg:h-1/2 relative z-10"
        />
        <svg
          width="312"
          height="175"
          viewBox="0 0 312 175"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute  w-full lg:hidden top-[-175px] right-0 z-10"
        >
          <path
            d="M0 1H295C303.837 1 311 8.16344 311 17V71.5C311 80.3366 303.837 87.5 295 87.5H183C174.163 87.5 167 94.6634 167 103.5V175"
            stroke="#B9B9B9"
            strokeWidth="2"
          />
        </svg>

        <Image
          src={leftArrowIcon}
          alt="oxygen"
          className="h-16 w-auto lg:hidden absolute z-20 right-5 top-[calc(80%)] md:top-[calc(100%-32px)] scale-75 md:scale-100"
        />
      </div>
    </div>
  );
};

export default FourthSection;
