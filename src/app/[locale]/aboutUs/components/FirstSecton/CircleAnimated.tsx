import { scrollBottom } from "@/utils/scroll";
import Image from "next/image";
import CircleAnim from "~/public/images/about/2.gif";

const CircleAnimated = () => {
  return (
    <div className="w-20  absolute top-[calc(100%-33px)] lg:top-1/2 right-[calc(50%-33px)]  lg:-right-9  z-50">
      <button type="button" className="z-50" onClick={scrollBottom}>
        <Image src={CircleAnim} alt="" className="w-[150px] h-auto" />
      </button>
    </div>
  );
};

export default CircleAnimated;
