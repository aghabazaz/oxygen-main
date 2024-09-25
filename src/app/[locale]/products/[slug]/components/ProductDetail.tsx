"use client";
import LinkButton from "@/components/common/LinkButton";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import bgLine from "~/public/icons/products/productLine.svg";
import { TProductItem } from "../../api/products.types";
import Rate from "./Rate";
import BreadCrumb from "@/components/common/BreadCrumb";
import ProductDetailMobile from "./ProductDetailMobile";
import { useTranslations } from "next-intl";

const ProductDetail = ({ product }: { product: TProductItem }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const t = useTranslations("Products");
  return (
    <>
      <div className="relative z-0 flex-col justify-end hidden w-full px-8 -mt-20 lg:flex lg:h-screen snap-start xl:px-32">
        <BreadCrumb className="" />
        <Image
          src={bgLine}
          alt=""
          className="absolute right-0 top-[95%] left-0 z-0"
        />
        <div className="flex items-center justify-between w-full h-full gap-2 md:gap-10 ">
          <div className="h-fit min-w-[33%] w-1/3">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={0}
              className="w-full drop-shadow-2xl"
              onSlideChangeTransitionEnd={(e) => setActiveSlide(e.realIndex)}
              loop={true}
            >
              {product.imageSrc.map((src, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center w-full h-full bg-white rounded-sm"
                  >
                    <Image
                      src={src}
                      alt={product?.label}
                      className=""
                      width={600}
                      height={600}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="flex items-center w-full gap-3 mt-5">
              {product.imageSrc.map((src, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => swiperRef.current?.swiper.slideTo(index)}
                    className={`drop-shadow-2xl w-24  h-24  rounded-sm transition-transform duration-100 ease-linear overflow-hidden ${activeSlide === index ? "bg-white scale-105" : "scale-100"}`}
                  >
                    <Image
                      src={src}
                      alt={product?.label}
                      className="object-cover w-full h-full"
                      fill
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col w-3/4 h-fit">
            <div className="flex flex-col">
              <h3 className="text-2xl ttext-start text-gray-80">
                {product.label}
              </h3>
              <div className="flex justify-start gap-1 text-gray-60">
                <Image
                  alt="category-icon"
                  src={generateCategoryIcon(product.category)}
                  className="w-6 h-auto mr-2"
                />
                <span>{product.category}</span>
              </div>
            </div>
            <p
              className="pt-10 text-sm text-justify md:py-16 2xl:py-24 text-gray-60"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
            <div className="flex flex-col items-center justify-between w-full md:flex-row ">
              <Rate />
              {/* <LinkButton
                className=""
                title=""
              /> */}
              <div
                className={`bg-yellow  h-10 flex items-center justify-center rounded-lg w-full md:w-1/3 mb-10 cursor-pointer`}
                onClick={() => {
                  document
                    .getElementById("customerRequestForm")
                    ?.scrollIntoView();
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xsm font-helveticaBold">
                    {t("PlaceYourOrder")}
                  </span>
                  <span className="text-sm">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <ProductDetailMobile product={product} />
    </>
  );
};

export default ProductDetail;
