import React, { CSSProperties } from "react";

const LuminRing = ({
  className,
  style,
}: {
  className: string;
  style?: CSSProperties;
}) => {
  return (
    <div
      className={`w-5 h-5 md:w-7  md:h-7 bg-yellow rounded-full absolute box-shadow-custom   ${className}`}
      style={style}
    ></div>
  );
};

export default LuminRing;
