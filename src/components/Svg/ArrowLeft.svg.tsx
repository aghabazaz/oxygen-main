import React from "react";

const ArrowLeft = ({ className }: { className?: string }) => {
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
        d="M13 25L3 14L13 2.5"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ArrowLeft;
