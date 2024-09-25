import React from "react";
import SendMessage from "./components/SendMessage";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
});

const ContactUs = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full px-8 pt-24 pb-10 bg-white md:h-screen snap-start xl:px-32 4k:px-72">
      <div className="flex flex-col md:flex-row w-full items-end justify-between h-full 2xl:h-[80%]  gap-10">
        <div className="w-full md:w-1/2 h-[50vh] md:h-full ">
          <Map />
        </div>
        <div className="w-full md:w-1/2 ">
          <SendMessage />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
