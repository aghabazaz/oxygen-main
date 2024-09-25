"use client";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import laibidMap from "~/public/images/quarries/topMap.png";

const Location = ({
  label,
  des,
  laibidMapImage,
}: {
  label: string;
  des: string;
  laibidMapImage: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);

  useEffect(() => {
    if (
      isInView &&
      targetRef.current &&
      paragraphRef.current &&
      imageRef.current
    ) {
      paragraphRef.current.className = "custom-translate";
      imageRef.current.className =
        imageRef.current.classList.value + " custom-translate";
    }
  }, [isInView]);
  return (
    <>
      <div className="relative flex-col items-center justify-between hidden w-full gap-10 px-8 py-5 md:h-screen lg:snap-start lg:flex md:flex-row xl:px-32">
        <div ref={targetRef} className="w-fit ">
          <div ref={paragraphRef} className="">
            <h3 className="mb-3 text-xl text-black 2xl:text-2xl">{label}</h3>
            <p
              className="text-base text-justify text-gray-80 2xl:text-sm"
              dangerouslySetInnerHTML={{ __html: des }}
            ></p>
          </div>
        </div>
        <div className="w-full py-0 h-fit lg:py-0">
          <div ref={imageRef}>
            <Image
              src={laibidMapImage}
              alt="laibid-location"
              className="w-full h-auto"
              width={1080}
              height={720}
            />
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="relative flex flex-col items-center justify-between w-full gap-10  py-5 lg:hidden">
        <div
          ref={targetRef}
          className="flex items-center justify-center w-fit lg:h-svh lg:snap-start px-8"
        >
          <div className="flex flex-col lg:h-fit overscroll-auto">
            <div ref={paragraphRef} className="">
              <h3 className="mb-3 text-xl text-black 2xl:text-2xl">{label}</h3>
              <p
                className="text-base text-justify text-gray-80 2xl:text-sm"
                dangerouslySetInnerHTML={{ __html: des }}
              ></p>
            </div>
          </div>
        </div>
        <div className="w-full py-5 lg:h-fit lg:snap-start mx-auto">
          <div ref={imageRef}>
            <Image
              src={laibidMapImage}
              alt="laibid-location"
              className="w-full lg:h-auto mx-auto"
              width={1080}
              height={720}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
