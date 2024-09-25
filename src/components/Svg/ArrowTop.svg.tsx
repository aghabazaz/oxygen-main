import React from "react";

const ArrowTop = ({ className }: { className?: string }) => {
  return (
    <svg
      width="27"
      height="15"
      viewBox="0 0 27 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 13L13 3L24.5 13"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowTop;
