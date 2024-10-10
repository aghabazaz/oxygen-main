"use client";
import { useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";
import cama from "~/public/images/footer/cama.png";

const QuarryInfoLocation = ({
  item,
  isCamma,
}: {
  item: any;
  isCamma: boolean;
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
        imageRef.current.classList.value + "custom-translate";
    }
  }, [isInView]);
  return (
    <>
      <div
        className="lg:flex flex-col hidden snap-start md:flex-row  items-center md:w-full lg:h-screen "
        ref={targetRef}
      >
        <div className="w-full h-svh  lg:h-fit  ">
          <div ref={paragraphRef}>
            {isCamma && (
              <Image
                src={cama}
                alt="cama"
                className="w-8 2xl:w-10 h-auto mb-2"
              />
            )}
            <h3 className="text-black text-xl 2xl:text-2xl mb-3">
              {item.title}
            </h3>
            <p
              className="text-gray-80 text-base 2xl:text-sm text-justify"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></p>
          </div>
        </div>
        <div className="w-full my-20 md:my-0 h-fit ">
          <div className="" ref={imageRef}>
            {item?.cover && <Image
              src={item.cover}
              alt="oxygen-iran-map"
              className="w-full h-auto"
              width={720}
              height={650}
            />}
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex lg:hidden flex-col  items-center " ref={targetRef}>
        <div className="w-full  flex items-center justify-center h-svh snap-start">
          <div className="h-[90%] overflow-hidden">
            <div ref={paragraphRef}>
              {isCamma && (
                <Image
                  src={cama}
                  alt="cama"
                  className="w-8 2xl:w-10 h-auto mb-2"
                />
              )}
              <h3 className="text-black text-xl 2xl:text-2xl mb-3">
                {item.title}
              </h3>
              <p
                className="text-gray-80 text-base 2xl:text-sm text-justify"
                dangerouslySetInnerHTML={{ __html: item.description }}
              ></p>
            </div>
          </div>
        </div>
        <div className="w-full h-fit snap-start  py-20">
          <div className="" ref={imageRef}>
            {item?.cover && <Image
              src={item.cover}
              alt="oxygen-iran-map"
              className="w-full h-auto"
              width={320}
              height={290}
            />}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuarryInfoLocation;
