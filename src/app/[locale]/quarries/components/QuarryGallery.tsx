"use client";
import { useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode, useEffect, useRef } from "react";

const QuarryGallery = ({
  children,
  imageSrc,
  className,
}: {
  children: ReactNode;
  imageSrc: StaticImageData;
  className?: string;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);

  useEffect(() => {
    let delay: any;
    if (isInView && targetRef.current) {
      targetRef.current.className = "custom-translate";
      delay = setTimeout(() => {
        if (childrenRef.current)
          childrenRef.current.className = "custom-translate";
      }, 100);
    }
    return () => {
      clearTimeout(delay);
    };
  }, [isInView]);
  return (
    <div
      className={`relative  w-full h-fit flex lg:block  lg:h-screen snap-start ${className}`}
    >
      <div className="" ref={targetRef}>
        <div className="" ref={imageRef}>
          <Image
            src={imageSrc}
            alt="oxygen-quarries-gallery"
            className="w-full h-auto lg:h-screen"
            width={1920}
            height={1080}
          />
        </div>
        <div className="absolute left-8 md:left-32 top-1/2 md:top-1/2 ">
          <div ref={childrenRef} className="translate-y-[200%]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuarryGallery;
