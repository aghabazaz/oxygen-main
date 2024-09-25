"use client";
import LinkButton from "@/components/common/LinkButton";
import SectionTitle from "@/components/common/SectionTitle";
import SliderPagination from "@/components/common/SliderPagination";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import Rate from "./Rate";
import { TProductItem } from "../../api/products.types";
import Analyze from "./Analyze";
import Location from "./Location";
import ProductImageViewer from "./ProductImageViewer";
import ProductFunctionality from "./ProductFunctionality";
import CustomerRequestForm from "./CustomerRequestForm";

type ProductMobileViewProps = {
  product: TProductItem;
};

const ProductMobileView = ({ product }: ProductMobileViewProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const customerFormref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const t = useTranslations("Products");

  const scrollToForm = () => {
    customerFormref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full lg:hidden">
      <div className="relative z-0 flex flex-col justify-end w-full px-8 lg:hidden">
        <div className="flex gap-2 flex-col justify-center w-full items-center scale-[0.91] mxs:scale-100">
          <div className="flex flex-col w-full gap-2 pt-5">
            <Swiper
              ref={swiperRef}
              slidesPerView={1}
              className="drop-shadow-2xl max-h-[45svh] aspect-square w-auto min-w-[90%]"
              onSlideChangeTransitionEnd={(e) => setActiveSlide(e.realIndex)}
              loop={true}
            >
              {product.imageSrc.map((src, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex items-center justify-center w-full bg-white rounded-sm "
                  >
                    <Image
                      src={src}
                      alt={product?.label}
                      className="object-contain w-full h-full rounded-sm"
                      fill
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="flex items-center justify-center w-full ">
              <SliderPagination
                activeIndex={activeSlide}
                swiperLength={product.imageSrc.length}
                bg="bg-yellow"
              />
            </div>
          </div>

          <div className="flex flex-col w-full pb-5">
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-center text-gray-80">
                {product.label}
              </h3>
              <div className="flex justify-center gap-1 text-gray-60">
                <Image
                  alt="category-icon"
                  src={generateCategoryIcon(product.category)}
                  className="w-6 h-auto mr-2"
                />
                <span className="font-bold">{product.category}-200*200</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between w-full md:flex-row ">
              <Rate />
              <button
                id="orderButton"
                className={`bg-yellow  h-10 flex items-center justify-center rounded-lg w-full md:w-1/3 mb-10 cursor-pointer`}
                onClick={() => {
                  scrollToForm();
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xsm font-helveticaBold">
                    {t("PlaceYourOrder")}
                  </span>
                  <span className="text-sm">+</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="">
            <SectionTitle
              title="Product introduction"
              className=""
              titleClassName="text-xs font-bold mb-5"
            />
            <p
              className="text-sm text-justify text-gray-60"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>
        </div>
      </div>
      <Analyze
        imageSrc={product.technicalAnalysisImage}
        imageSrcMobile={product.technicalAnalysisImageMobile}
      />
      <Location
        label={product.label}
        des={product.useLocationDescription}
        laibidMapImage={product.laibidMap}
      />
      <ProductImageViewer
        imageSrc={product.ProductionLocationImage}
        alt={product.label}
      />
      <ProductImageViewer
        imageSrc={product.StoneProductionImage}
        alt={product.label}
      />
      <ProductFunctionality productData={product} />
      <CustomerRequestForm ref={customerFormref} />
    </div>
  );
};

export default ProductMobileView;
