import { useLocale } from "next-intl";
import React, { Ref, forwardRef } from "react";

const LineWithLuminRing = forwardRef(({}, ref?: Ref<SVGSVGElement>) => {
  const locale = useLocale();
  return (
    <svg
      viewBox="0 0 811 502"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full ${locale === "fa" ? "flip" : ""}`}
      ref={ref}
    >
      <path
        d="M426.062 34.5H808V381.616C808 412.544 782.928 437.616 752 437.616H59C28.0721 437.616 3 462.688 3 493.616V502"
        stroke="#B9B9B9"
        strokeWidth="5"
      />
      <g filter="url(#filter0_f_765_800)">
        <circle cx="426" cy="35" r="17" fill="#FFC62F" />
      </g>
      <circle cx="426" cy="35" r="17" fill="#FFC62F" />
      <defs>
        <filter
          id="filter0_f_765_800"
          x="391.9"
          y="0.9"
          width="68.2"
          height="68.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="8.55"
            result="effect1_foregroundBlur_765_800"
          />
        </filter>
      </defs>
    </svg>
  );
});

LineWithLuminRing.displayName = "LineWithLuminRing";

export default LineWithLuminRing;
