import React from "react";
import SectionTitle from "../common/SectionTitle";

const Header = () => {
  return (
    <>
      <div className="flex items-center w-full justify-end">
        <div className="w-1/2 absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="811"
            height="220"
            viewBox="0 0 811 220"
            fill="none"
            className="w-full h-full"
          >
            <path
              d="M3 220V56.6157C3 25.6877 28.0721 0.615662 59 0.615662H752C782.928 0.615662 808 -24.4565 808 -55.3844V-331"
              stroke="#B9B9B9"
              strokeWidth="5"
            />
          </svg>
        </div>
      </div>
      <div className=" flex items-center px-32 h-[13vh]">
        <SectionTitle title="slab & tile" className="" />
      </div>
    </>
  );
};

export default Header;
