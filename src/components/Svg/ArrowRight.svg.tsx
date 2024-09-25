import React from "react";

const ArrowRight = ({ className }: { className?: string }) => {
  return (
    <svg
      width="15"
      height="27"
      viewBox="0 0 15 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 2L12 13L2 24.5"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowRight;
