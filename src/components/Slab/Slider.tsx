import Image from "next/image";
import { use, useRef, useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import backgroundOne from "~/public/images/slab/backgroundOne.jpg";
import backgroundTwo from "~/public/images/slab/backgroundTwo.jpg";
import backgroundThree from "~/public/images/slab/backgroundthree.jpg";
import bgThreeMobile from "~/public/images/slab/bgOneMobile.jpg";
import thumbOne from "~/public/images/slab/thumb1.jpg";
import thumbTwo from "~/public/images/slab/thumb2.jpg";
import thumbThree from "~/public/images/slab/thumb3.jpg";
import thumbFour from "~/public/images/slab/thumb4.jpg";
import CartItem from "../common/CartItem";
import CustomPaginationAndNavigation from "../common/CustomPaginationAndNavigation";
import { ISlabData } from "./slab.types";
import LinkButton from "../common/LinkButton";
import { useSlabs } from "../api/useSlabs";
import { useLocale, useTranslations } from "next-intl";

const swiperData2: ISlabData = {
  background: [
    {
      imgSrc: backgroundOne,
      alt: "oxygenSlab",
      key: "slabBg1",
    },
    {
      imgSrc: backgroundTwo,
      alt: "oxygenSlab",
      key: "slabBg2",
    },
    {
      imgSrc: backgroundThree,
      mobileImgSrc: bgThreeMobile,
      alt: "oxygenSlab",
      key: "slabBg3",
    },
  ],
  thumbs: [
    {
      imgSrc: thumbOne,
      key: "slabThumb1",
      label: "Laibid Crystal",
      content: "slab & tile",
      href: "/",
    },
    {
      imgSrc: thumbTwo,
      key: "slabThumb2",
      label: "Makia Black",
      content: "slab & tile",
      href: "/",
    },
    {
      imgSrc: thumbThree,
      key: "slabThumb3",
      label: "Bianko",
      content: "slab & tile",
      href: "/",
    },
    {
      imgSrc: thumbFour,
      key: "slabThumb4",
      label: "traverten",
      content: "slab & tile",
      href: "/",
    },
  ],
};

export default function SlabSlider() {
  const locale = useLocale();
  const { data: swiperData } = useSlabs(locale);
  const swiperRef = useRef<SwiperRef>(null);
  const thumbSwiperRef = useRef<SwiperRef>(null);
  const [isContinue, setIsContinue] = useState(false);
  const [activeIndexThumbs, setActiveIndexThumbs] = useState(0);
  const t = useTranslations("Index");
  return (
    <div className="relative h-full flex  flex-col">
      <Swiper
        loop
        spaceBetween={10}
        grabCursor={true}
        ref={swiperRef}
        navigation={true}
        modules={[FreeMode, Thumbs, Navigation, Autoplay]}
        className="w-full h-[calc(100svh-290px)] lg:h-[calc(100vh-330px)] "
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChangeTransitionEnd={(e) => {
          if (isContinue && e.realIndex === 0) {
            setActiveIndexThumbs(2);
          } else if (isContinue && e.realIndex === 1) {
            setActiveIndexThumbs(3);
            setIsContinue(false);
          } else {
            setActiveIndexThumbs(e.realIndex);
            e.realIndex === 1 && setIsContinue(true);
          }
        }}
      >
        {swiperData.background.map((item) => {
          return (
            <SwiperSlide key={item.key}>
              <Image
                src={item.imgSrc}
                alt={item.alt}
                className="h-full hidden lg:block object-cover w-full"
                fill
              />
              <Image
                src={item.mobileImgSrc || item.imgSrc}
                alt={item.alt}
                className="h-full lg:hidden object-cover w-full"
                width={400}
                height={500}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        className={`w-full hidden lg:flex items-end justify-between  pl-5 md:px-32 absolute bottom-0 2xsm:bottom-16 xs:bottom-16 sm:-bottom-3 md:bottom-[18px] `}
      >
        <CustomPaginationAndNavigation
          swiperLength={swiperData.thumbs.length}
          activeIndex={activeIndexThumbs}
          className={`w-full hidden mb-[calc(40vh-280px)]  2xl:mb-0 md:flex 2xl:h-[200px] h-[110px] md:w-1/4  ${locale === "fa" ? "mx-8" : ""}`}
          handleNextClick={() => swiperRef.current?.swiper.slideNext()}
          handlePrevClick={() => swiperRef.current?.swiper.slidePrev()}
        />
        <Swiper
          spaceBetween={15}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs, Autoplay]}
          className="w-full 2xl:w-3/4 h-[300px] slabSwiper "
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {swiperData.thumbs.map((item, index) => {
            return (
              <SwiperSlide
                key={item.label + item.key}
                className={`w-full  max-h-[250px] h-fit`}
              >
                <div
                  className={`w-full h-fit container-pentagon min-w-[200px]  bg-white transition-transform ease-linear duration-300  ${index === activeIndexThumbs ? "scale-105" : "scale-100"}`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.label}
                    className="w-full h-32  right-image-pentagon "
                    width={400}
                    height={300}
                  />
                  <div className="flex flex-col justify-between h-[160px] p-5">
                    <div className="flex flex-col items-start mb-3">
                      <span className="text-gray-80 text-xs font-helveticaBold">
                        {item.label}
                      </span>
                      <span className="text-gray-60 text-base">
                        {item.content}
                      </span>
                    </div>
                    <LinkButton
                      href={"/" + locale + item.href}
                      title={t("see more")}
                      className="w-full my-2"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className={`w-full flex lg:hidden items-end justify-between md:px-32 absolute bottom-0 2xsm:bottom-16 xs:bottom-16 sm:-bottom-3 md:bottom-[18px] `}
      >
        <Swiper
          spaceBetween={15}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          ref={thumbSwiperRef}
          watchSlidesProgress={true}
          onSlideChange={(e) =>
            swiperRef.current?.swiper.slideTo(e.activeIndex)
          }
          modules={[FreeMode, Thumbs, Autoplay]}
          className="w-full 2xl:w-3/4 h-[300px] slabSwiper "
          breakpoints={{
            0: {
              slidesPerView: 1.4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1920: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          centeredSlides={true}
          centerInsufficientSlides={true}
        >
          {swiperData.thumbs.map((item, index) => {
            return (
              <SwiperSlide
                key={item.label + item.key}
                className={`w-full  max-h-[250px] h-fit`}
              >
                <div
                  className={`w-full h-fit container-pentagon min-w-[200px]  bg-white transition-transform ease-linear duration-300  ${index === activeIndexThumbs ? "scale-105" : "scale-100"}`}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.label}
                    className="w-full h-32  right-image-pentagon "
                    width={400}
                    height={300}
                  />
                  <div className="flex flex-col justify-between h-[160px] p-5">
                    <div className="flex flex-col items-start mb-3">
                      <span className="text-gray-80 text-xs font-helveticaBold">
                        {item.label}
                      </span>
                      <span className="text-gray-60 text-base">
                        {item.content}
                      </span>
                    </div>
                    <LinkButton
                      href={"/" + locale + item.href}
                      title={t("see more")}
                      className="w-full my-2"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <CustomPaginationAndNavigation
        swiperLength={swiperData.thumbs.length}
        activeIndex={activeIndexThumbs}
        className=" lg:hidden w-full absolute bottom-0 bg-gray-20 h-10 flex justify-center  select-none"
        handleNextClick={() => swiperRef.current?.swiper.slideNext()}
        handlePrevClick={() => swiperRef.current?.swiper.slidePrev()}
      />
    </div>
  );
}
