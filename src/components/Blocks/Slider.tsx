import Image from "next/image";
import { use, useMemo, useRef, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import CustomPaginationAndNavigation from "../common/CustomPaginationAndNavigation";
import ExportInfo from "./ExportInfo";
import StoneInfo from "./StoneInfo";
import { ISliderData } from "./blocks.types";
import { useLocale } from "next-intl";

const BlockSlider = ({ sliderData }: { sliderData: ISliderData[] }) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale();
  const filteredData = useMemo(() => {
    return sliderData.find((item, index) => {
      return index === activeIndex;
    });
  }, [activeIndex, sliderData]);

  return (
    <>
      {/* amazing☺️ */}
      <CustomPaginationAndNavigation
        className={`bottom-20 md:translate-x-0 w-fit md:bottom-50 mt-7 md:mt-0 md:absolute ${locale === "fa" ? "right-1/2 md:-right-0" : "left-1/2 md:-left-0"}`}
        activeIndex={activeIndex}
        swiperLength={sliderData.length}
        handleNextClick={() => swiperRef.current?.swiper.slideNext()}
        handlePrevClick={() => swiperRef.current?.swiper.slidePrev()}
      />
      {filteredData ? <StoneInfo stonInfo={filteredData} /> : null}
      <Swiper
        className="w-full  h-full"
        direction={"vertical"}
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        loop
        onSlideChangeTransitionEnd={(e) => setActiveIndex(e.realIndex)}
      >
        {sliderData.map((item) => {
          return (
            <SwiperSlide className="lg:w-[46%] " key={item.key}>
              <div className="flex w-full  flex-col-reverse  lg:max-h-full h-full items-center   lg:flex-row lg:justify-center lg:h-full blocks">
                <div className="w-full flex relative  main-content h-full lg:h-full justify-center">
                  <Image
                    className="w-full sm:w-10/12 h-full object-contain"
                    src={item.imageSrc}
                    alt={item.leftData.header}
                    fill
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* invisible in mobile */}
      <ExportInfo activeIndex={activeIndex} exportData={filteredData} />
    </>
  );
};

export default BlockSlider;
