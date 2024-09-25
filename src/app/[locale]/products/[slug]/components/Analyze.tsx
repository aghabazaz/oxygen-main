"use client";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef } from "react";
import analyzeIcon from "~/public/icons/products/analyze.svg";
import bgLineMobile from "~/public/icons/products/productLineMobile.svg";

const Analyze = ({
  imageSrc,
  imageSrcMobile,
}: {
  imageSrc: string;
  imageSrcMobile: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Products");
  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView && targetRef.current) {
      targetRef.current.className = "custom-translate";
    }
  }, [isInView]);

  return (
    <div className="relative w-full overflow-hidden lg:h-screen lg:snap-start">
      <Image
        src={bgLineMobile}
        alt=""
        className="absolute lg:z-0 top-5 lg:hidden"
      />
      <div className="w-full lg:h-full p-5 px-8 py-8 xl:px-32 xl:py-24 md:p-0 mt-20 lg:mt-0">
        <div className="relative flex flex-col justify-center w-full lg:h-full p-5 bg-white rounded-sm drop-shadow-md md:flex-row md:items-center md:p-0">
          <div className="absolute flex items-center justify-center w-12 h-12 bg-yellow drop-shadow-md rounded-8 left-8 -top-4">
            <Image src={analyzeIcon} alt="analyzeIcon" className="w-[60%]" />
          </div>
          <div className="flex w-full lg:w-[70%] flex-col my-0 h-full justify-center scale-[0.85] sm:scale-100">
            <div className="w-full h-full md:h-4/6" ref={targetRef}>
              <h4 className="text-xs 2xl:text-sm text-gray-60">
                {t("Analyze")}
              </h4>
              <div className="flex items-center justify-center w-full h-full overflow-hidden">
                <Image
                  alt="analyze stone"
                  src={imageSrc}
                  className="hidden w-full h-full md:block "
                  width={1728}
                  height={1080}
                />
                <Image
                  alt="analyze stone"
                  src={imageSrcMobile}
                  className="object-contain w-full h-full mt-2 md:hidden"
                  width={800}
                  height={900}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
