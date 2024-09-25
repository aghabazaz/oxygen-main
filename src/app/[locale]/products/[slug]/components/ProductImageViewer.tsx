"use client";
import { useInView } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

const ProductImageViewer = ({
  imageSrc,
  alt,
  isAnimate = true,
}: {
  imageSrc: string;
  alt: string;
  isAnimate?: boolean;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView && animationRef.current && isAnimate) {
      animationRef.current.className = "custom-translate";
    }
  }, [isInView, isAnimate]);
  return (
    <>
      <div ref={targetRef} className="h-10"></div>
      <div className="" ref={animationRef}>
        <Image
          src={imageSrc}
          alt={alt}
          className="w-full h-auto lg:h-[calc(100vh-40px)] object-fill "
          width={1920}
          height={1080}
        />
      </div>
    </>
  );
};

export default ProductImageViewer;
