import React from "react";

const SliderPagination = ({
  swiperLength,
  activeIndex,
  activeBg = "bg-gray-20",
  bg = "bg-gray-60",
}: {
  swiperLength: number;
  activeIndex: number;
  activeBg?: string;
  bg?: string;
}) => {
  const arrayMadeOfSliderLength = Array.from(
    { length: swiperLength },
    (v, i) => i,
  );

  return (
    <div className="flex gap-0.5">
      {arrayMadeOfSliderLength.map((el) => {
        return (
          <div
            key={el}
            className={`h-1 lg:h-0.5 rounded-xsm transition-[width] duration-300 ease-linear ${el === activeIndex ? `${activeBg}  w-[42.5px]` : `${bg}  w-[20.5px]`}`}
          ></div>
        );
      })}
    </div>
  );
};

export default SliderPagination;
