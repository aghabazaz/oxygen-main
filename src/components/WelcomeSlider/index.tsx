"use client";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MouseSection from "./MouseSection";

import { CreativeEffectOptions } from "swiper/types";
import CustomPagination from "./CustomPagination";
import Slider from "./Slider";
import MobileNavBar from "../TopMenu/Mobile";
import { useSlider } from "../api/useSlider";
import { ISlider } from "../api/types";

const creativeEffect: CreativeEffectOptions = {
  prev: {
    shadow: true,
    translate: ["-10%", 0, -1],
  },
  next: {
    translate: ["100%", 0, 0],
  },
};

const WelcomeSlider = () => {
  const swiperRef = useRef<any>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const { data, isLoading, isError } = useSlider();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className="w-full text-white h-svh md:h-screen md:snap-start relative -mt-20 md:mt-0">
        <Swiper
          speed={500}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          effect={"creative"}
          creativeEffect={creativeEffect}
          ref={swiperRef}
          modules={[EffectCreative, Autoplay]}
          onSlideChangeTransitionEnd={(e) => setActiveIndex(e.realIndex)}
        >
          <MouseSection ref={svgRef} />
          <CustomPagination swiperLength={2} activeIndex={activeIndex} />
          {data.map((item: ISlider) => {
            return (
              <SwiperSlide key={item.image}>
                <Slider item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default WelcomeSlider;
