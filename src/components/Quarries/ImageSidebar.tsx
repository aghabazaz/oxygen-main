import Image from "next/image";
import LuminRing from "../common/LuminRing";
import querriesImg2 from "~/public/images/quarries/querries.png";

const ImageSidebar = ({ querriesImg }: { querriesImg: string }) => {
  return (
    <div className="relative w-full md:w-fit h-fit md:h-[85%] scale-95">
      <svg
        viewBox="0 0 846 818"
        className="path md:h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="md:stroke-[5px] stroke-[7px]"
          d="M0 3H720.5L843 104.5V817.5"
          stroke="#FFC62F"
        />
      </svg>
      <LuminRing className="-right-[10px] md:-right-3 -bottom-[10px] light z-10" />
      <div className="">
        <Image
          src={querriesImg}
          alt="querriesImg"
          width={813}
          height={780}
          className="w-full h-full  md:h-full object-cover absolute right-2 top-3 md:right-4 scale-95 md:top-5 qurries-cover"
        />
      </div>
    </div>
  );
};

export default ImageSidebar;
