import { SwiperOptions } from "swiper/types";
export const swiperBreakpoints: SwiperOptions["breakpoints"] = {
  0: {
    slidesPerView: 1.2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1440: {
    slidesPerView: 3,
    spaceBetween: 100,
  },
};
