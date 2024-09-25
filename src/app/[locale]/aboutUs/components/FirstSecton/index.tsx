"use client";
import BreadCrumb from "@/components/common/BreadCrumb";
import { Suspense } from "react";
import Content from "./Content";
import ImageSection from "./ImageSection";

const FirstSection = () => {
  return (
    <section className="flex h-svh flex-col lg:h-screen -mt-20 snap-start">
      <div className="flex flex-col  justify-between lg:justify-around  lg:pt-20 h-full">
        <Suspense>
          <BreadCrumb />
        </Suspense>
        <div className=" w-full lg:pb-10 h-[90%] lg:h-fit lg:pt-0 flex flex-col lg:flex-row-reverse  items-center justify-between scale-[0.8] xs:scale-100">
          <ImageSection />
          <Content />
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
