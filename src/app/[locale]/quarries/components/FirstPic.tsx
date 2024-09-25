"use client";
import PolyhedralCube from "@/components/Svg/PolyhedralCube";
import BreadCrumb from "@/components/common/BreadCrumb";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Suspense, useEffect, useRef } from "react";
import quarriesBg from "~/public/images/quarries/quarriesBg.png";

const FirstPic = ({ item }: { item: any }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const cubicRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView && targetRef.current && cubicRef.current) {
      cubicRef.current.className = "custom-translateXY";
    }
  }, [isInView]);
  return (
    <div className={`relative w-full h-svh lg:h-screen snap-start -mt-20`}>
      <div className="" ref={targetRef}>
        <Image
          src={item.cover}
          alt="oxygen-quarries"
          className="w-full h-svh lg:h-screen object-cover"
          fill
        />
      </div>
      <div className="absolute  left-10 bottom-0 w-[calc(100%-40px)]  lg:w-fit overflow-hidden">
        <div ref={cubicRef}>
          <PolyhedralCube strokeColor="#000" />
        </div>
        <h3 className="text-black font-helveticaBold text-xl 2xl:text-2xl">
          {item.title}
        </h3>
        <h4
          className="text-black text-lg mb-3 lg:text-xl 2xl:text-2xl"
          dangerouslySetInnerHTML={{ __html: item.description }}
        ></h4>
        <div className="w-1/2 max-w-[50%] lg:max-w-full overflow-hidden lg:w-full h-16 border-r-4 border-t-4 border-yellow"></div>
      </div>
      <div className="w-fit absolute top-24 left-8 md:left-24 ">
        <Suspense>
          <BreadCrumb />
        </Suspense>
      </div>
    </div>
  );
};

export default FirstPic;
