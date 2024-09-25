import { useSwiper } from "swiper/react";
import CustomPaginationAndNavigation from "../common/CustomPaginationAndNavigation";
import SliderPagination from "../common/SliderPagination";

const CustomPagination = ({
  swiperLength,
  activeIndex,
}: {
  swiperLength: number;
  activeIndex: number;
}) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="absolute bottom-6 hidden left-10 lg:flex gap-1 items-center text-white z-20 ">
        <button
          onClick={() => {
            swiper.slideNext();
          }}
          className="font-helveticaBold"
        >{`${activeIndex + 1} / ${swiperLength}`}</button>
        <SliderPagination
          swiperLength={swiperLength}
          activeIndex={activeIndex}
        />
      </div>
      <CustomPaginationAndNavigation
        swiperLength={swiperLength}
        activeIndex={activeIndex}
        className="w-full absolute z-10 h-10 bottom-0 lg:hidden  left-[calc(50%-30px)] select-none"
      />
    </>
  );
};

export default CustomPagination;
