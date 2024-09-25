import LinkButton from "@/components/common/LinkButton";
import Rate from "./Rate";
import Image from "next/image";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import SliderPagination from "@/components/common/SliderPagination";
import { useRef, useState } from "react";
import { TProductItem } from "../../api/products.types";
import SectionTitle from "@/components/common/SectionTitle";
import { useTranslations } from "next-intl";

const ProductDetailMobile = ({ product }: { product: TProductItem }) => {
  const t = useTranslations("Products");
  const swiperRef = useRef<SwiperRef>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="relative z-0 flex flex-col justify-end w-full px-8 lg:hidden">
      <div className=" h-svh snap-start flex gap-2 flex-col justify-center w-full items-center scale-[0.82] mxs:scale-100">
        <div className="flex flex-col w-full gap-2 pt-0 ">
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

        <div className="w-full flex flex-col h-[40vh]">
          <div className="flex flex-col">
            <h3 className="text-xl text-center text-gray-80">
              {product.label}
            </h3>
            <div className="flex justify-center gap-1 text-gray-60">
              <Image
                alt="category-icon"
                src={generateCategoryIcon(product.category)}
                className="w-6 h-auto mr-2"
              />
              <span>{product.category}-200*200</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full md:flex-row ">
            <Rate />
            {/* <LinkButton
              href="/cart"
              className="w-full mb-10 md:w-1/3"
              title="Place Your Order"
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
      <div className="flex items-center h-svh">
        <div className="h-[90%] overflow-hidden ">
          <SectionTitle
            title="Product introduction"
            className="lg:hidden"
            titleClassName="text-xs font-bold mb-5"
          />
          <p
            className="text-sm text-justify text-gray-60"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailMobile;
