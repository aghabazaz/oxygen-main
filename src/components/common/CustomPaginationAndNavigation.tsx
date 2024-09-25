import { Ref, forwardRef } from "react";
import { useSwiper } from "swiper/react";
import SliderPagination from "./SliderPagination";

import ArrowLeft from "../Svg/ArrowLeft.svg";
import ArrowRight from "../Svg/ArrowRight.svg";

const CustomPaginationAndNavigation = forwardRef(
  (
    {
      swiperLength,
      activeIndex,
      className,
      handleNextClick,
      handlePrevClick,
    }: {
      swiperLength: number;
      activeIndex: number;
      className?: string;
      handlePrevClick?: () => void;
      handleNextClick?: () => void;
    },
    ref?: Ref<HTMLButtonElement>
  ) => {
    const swiper = useSwiper();

    return (
      <div
        className={`flex w-fit gap-1 items-center justify-start ${className}`}
        dir="ltr"
      >
        <button
          className="bg-yellow hidden md:flex justify-center items-center rounded-full w-11 h-11"
          onClick={() => {
            if (handlePrevClick) {
              handlePrevClick();
            } else {
              swiper.slidePrev();
            }
          }}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <SliderPagination
          swiperLength={swiperLength}
          activeIndex={activeIndex}
          bg="bg-gray-40"
          activeBg="bg-yellow"
        />

        <button
          className="bg-yellow hidden md:flex z-30  justify-center items-center rounded-full w-11 h-11"
          onClick={() => {
            if (handleNextClick) {
              handleNextClick();
            } else {
              swiper.slideNext();
            }
          }}
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }
);

CustomPaginationAndNavigation.displayName = "CustomPaginationAndNavigation";

export default CustomPaginationAndNavigation;
