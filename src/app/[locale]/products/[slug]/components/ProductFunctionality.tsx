"use client";
import Image from "next/image";
import { TProductItem } from "../../api/products.types";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useLocale } from "next-intl";

const ProductFunctionality = ({
  productData,
}: {
  productData: Pick<
    TProductItem,
    | "ProductFunctionalityImage"
    | "description"
    | "label"
    | "mineTypeDescription"
  >;
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);
  const locale = useLocale();
  useEffect(() => {
    if (
      isInView &&
      targetRef.current &&
      descriptionRef.current &&
      imageRef.current
    ) {
      descriptionRef.current.className = "custom-translate";
      imageRef.current.className =
        imageRef.current.classList.value + "custom-translate";
    }
  }, [isInView]);
  return (
    <>
      <div
        className={`items-center hidden w-full h-screen ${locale === "fa" ? "pr-8 xl:pr-32" : "pl-8 xl:pl-32"} py-5 lg:snap-start lg:flex`}
      >
        <div
          ref={targetRef}
          className="flex items-center justify-center gap-10 lg:pt-20"
        >
          <div className="w-full">
            <div ref={descriptionRef}>
              <h3 className="mb-3 text-xl text-black 2xl:text-2xl">
                {productData.label}
              </h3>
              <p
                className="text-base text-justify text-gray-80 2xl:text-sm"
                dangerouslySetInnerHTML={{
                  __html: productData.mineTypeDescription,
                }}
              ></p>
              {/* <p className="text-base text-justify text-gray-80 2xl:text-sm">
                {productData.description}
              </p> */}
            </div>
          </div>
          <div className="w-full ">
            <div className="" ref={imageRef}>
              <Image
                src={productData.ProductFunctionalityImage}
                alt={productData.label}
                className="w-full h-auto"
                width={910}
                height={910}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div className="flex items-center w-full py-5 h-fit lg:hidden snap-mandatory snap-normal">
        <div
          ref={targetRef}
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="w-full px-8 pb-10 overflow-hidden">
            <div ref={descriptionRef}>
              <h3 className="mb-3 text-xl text-black 2xl:text-2xl">
                {productData.label}
              </h3>
              <p
                className="text-base text-justify text-gray-80 2xl:text-sm"
                dangerouslySetInnerHTML={{
                  __html: productData.mineTypeDescription,
                }}
              ></p>
            </div>
          </div>
          <div className="items-center w-full py-10 h-fit lg:snap-start">
            <div className="" ref={imageRef}>
              <Image
                src={productData.ProductFunctionalityImage}
                alt={productData.label}
                className="w-full h-auto"
                width={100}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFunctionality;
