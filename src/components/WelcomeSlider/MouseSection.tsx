import { useLocale } from "next-intl";
import React, { Ref, forwardRef, useRef } from "react";

const MouseSection = forwardRef(
  ({ children }: { children?: React.ReactNode }, ref?: Ref<SVGSVGElement>) => {
    const locale = useLocale();
    const scrollToButton = () => {
      document.querySelector("body")?.scrollTo({
        top: document.body.offsetHeight,
        left: 0,
        behavior: "smooth",
      });
    };
    return (
      <div className="w-full  absolute h-fit  bottom-0  z-10 flex justify-center">
        <div className="w-1/2  lg:hidden h-[100px] right-0 mouseSectionLine translate-y-full absolute bottom-24  bg-transparent  border-l border-t-2 border-gray-light rounded-tl-[40px] "></div>

        <button
          type="button"
          onClick={scrollToButton}
          className="triangle-up  hidden lg:flex relative h-fit"
        >
          <div
            className={`w-[300px] h-[100px] mouseSectionLine translate-y-full absolute bottom-[95%]  bg-transparent  ${locale === "fa" ? "left-0" : ""} border-l rounded-tl-[40px] border-t-2 border-gray-light `}
          ></div>
          <div className="w-fit absolute right-1/2 translate-x-1/2 gap-2 flex flex-col top-4 h-fit ">
            <svg
              width="28"
              height="41"
              viewBox="0 0 28 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26 14.0113C26 7.37762 20.6274 2 14 2C7.37258 2 2 7.37762 2 14.0113V27.1849C2 33.8185 7.37258 39.1961 14 39.1961C20.6274 39.1961 26 33.8185 26 27.1849V14.0113Z"
                stroke="#D9D9D9"
                strokeWidth="2.67857"
              />
              <path
                d="M26 14.0113C26 7.37762 20.6274 2 14 2C7.37258 2 2 7.37762 2 14.0113V27.1849C2 33.8185 7.37258 39.1961 14 39.1961C20.6274 39.1961 26 33.8185 26 27.1849V14.0113Z"
                stroke="black"
                strokeWidth="2.67857"
              />
              <path
                d="M14 8.33327C14.7811 8.33327 15.4145 8.96708 15.4145 9.74918V14.3987C15.4145 15.1808 14.7811 15.8146 14 15.8146C13.219 15.8146 12.5856 15.1808 12.5856 14.3987V9.74918C12.5856 8.96708 13.219 8.33327 14 8.33327Z"
                fill="#D9D9D9"
              />
              <path
                d="M14 8.33327C14.7811 8.33327 15.4145 8.96708 15.4145 9.74918V14.3987C15.4145 15.1808 14.7811 15.8146 14 15.8146C13.219 15.8146 12.5856 15.1808 12.5856 14.3987V9.74918C12.5856 8.96708 13.219 8.33327 14 8.33327Z"
                fill="black"
              />
              <path
                d="M14 8.33327C14.7811 8.33327 15.4145 8.96708 15.4145 9.74918V14.3987C15.4145 15.1808 14.7811 15.8146 14 15.8146C13.219 15.8146 12.5856 15.1808 12.5856 14.3987V9.74918C12.5856 8.96708 13.219 8.33327 14 8.33327Z"
                stroke="#D9D9D9"
                strokeWidth="0.267857"
              />
              <path
                d="M14 8.33327C14.7811 8.33327 15.4145 8.96708 15.4145 9.74918V14.3987C15.4145 15.1808 14.7811 15.8146 14 15.8146C13.219 15.8146 12.5856 15.1808 12.5856 14.3987V9.74918C12.5856 8.96708 13.219 8.33327 14 8.33327Z"
                stroke="black"
                strokeWidth="0.267857"
              />
            </svg>

            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6423 7.07796C22.9441 5.77495 22.9441 3.66234 21.6423 2.35932C20.3405 1.0563 18.2298 1.0563 16.928 2.35932L9.85672 9.43728C8.55492 10.7403 8.55492 12.8529 9.85672 14.1559C11.1585 15.4589 13.2691 15.4589 14.5709 14.1559L21.6423 7.07796Z"
                fill="#D9D9D9"
              />
              <path
                d="M21.6423 7.07796C22.9441 5.77495 22.9441 3.66234 21.6423 2.35932C20.3405 1.0563 18.2298 1.0563 16.928 2.35932L9.85672 9.43728C8.55492 10.7403 8.55492 12.8529 9.85672 14.1559C11.1585 15.4589 13.2691 15.4589 14.5709 14.1559L21.6423 7.07796Z"
                fill="black"
              />
              <path
                d="M2.357 7.07796C1.05521 5.77495 1.05521 3.66234 2.357 2.35932C3.6588 1.0563 5.76943 1.0563 7.07122 2.35932L14.1426 9.43728C15.4443 10.7403 15.4443 12.8529 14.1426 14.1559C12.8408 15.4589 10.7301 15.4589 9.42833 14.1559L2.357 7.07796Z"
                fill="#D9D9D9"
              />
              <path
                d="M2.357 7.07796C1.05521 5.77495 1.05521 3.66234 2.357 2.35932C3.6588 1.0563 5.76943 1.0563 7.07122 2.35932L14.1426 9.43728C15.4443 10.7403 15.4443 12.8529 14.1426 14.1559C12.8408 15.4589 10.7301 15.4589 9.42833 14.1559L2.357 7.07796Z"
                fill="black"
              />
            </svg>
          </div>
        </button>
        <button
          type="button"
          onClick={scrollToButton}
          className="triangle-up-mobile bg-transparent lg:hidden flex relative h-fit bg-none  bottom-4"
        >
          <div className="w-fit absolute right-1/2 translate-x-1/2 gap-2 flex flex-col top-4 h-fit ">
            <svg
              width="20"
              height="45"
              viewBox="0 0 20 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 10.0084C19 5.03322 14.9706 1 10 1C5.02944 1 1 5.03322 1 10.0084V19.8887C1 24.8639 5.02944 28.8971 10 28.8971C14.9706 28.8971 19 24.8639 19 19.8887V10.0084Z"
                stroke="#ECECEC"
                strokeWidth="2"
              />
              <path
                d="M9.99997 5.78343C10.5673 5.78343 11.0273 6.24377 11.0273 6.81189V10.299C11.0273 10.8671 10.5673 11.3275 9.99997 11.3275C9.4327 11.3275 8.97261 10.8671 8.97261 10.299V6.81189C8.97261 6.24377 9.4327 5.78343 9.99997 5.78343Z"
                fill="#ECECEC"
                stroke="#ECECEC"
                strokeWidth="0.267857"
              />
              <path
                d="M3 36.8971L9.13536 42.6234C9.90378 43.3406 11.0962 43.3406 11.8646 42.6234L18 36.8971"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </button>
        {/* */}
        {children}
      </div>
    );
  }
);

MouseSection.displayName = "MouseSection";

export default MouseSection;
