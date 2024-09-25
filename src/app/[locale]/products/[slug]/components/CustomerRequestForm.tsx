"use client";
import SectionTitle from "@/components/common/SectionTitle";
import { useInView } from "framer-motion";
import { forwardRef, Ref, useEffect, useRef } from "react";
import Form from "./Form";
import customerBg from "~/public/icons/products/customerReqBg.svg";
import customerBgMobile from "~/public/icons/products/customerReqBgMobile.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";

const CustomerRequestForm = forwardRef(({}, ref?: Ref<HTMLDivElement>) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Index");
  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView && animationRef.current) {
      animationRef.current.className =
        animationRef.current.classList.value + " custom-translate";
    }
  }, [isInView]);

  return (
    <div
      ref={targetRef}
      className="relative flex flex-col justify-end w-full min-h-screen bg-gray-20 lg:pb-10 2xl:pb-16 lg:snap-start h-svh lg:h-screen "
    >
      <div
        ref={animationRef}
        className="flex flex-col justify-end h-full lg:block"
      >
        <div className="absolute top-0 left-0 right-0 w-full">
          <Image
            src={customerBg}
            alt="customerLine"
            className="hidden md:block"
          />
          <Image
            src={customerBgMobile}
            alt="customerLine"
            className="w-full lg:hidden"
          />
        </div>

        <div className="flex flex-col justify-end h-full  md:px-8 lg:block xl:px-32 ">
          <SectionTitle
            title={t("CustomerRequest")}
            className="hidden pt-24 lg:flex"
            titleClassName="md:text-sm"
          />
          <div
            ref={ref}
            className="w-full scale-[.85]  flex h-full lg:h-fit items-center justify-end lg:justify-center"
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
});

CustomerRequestForm.displayName = "CustomerRequestForm";

export default CustomerRequestForm;
