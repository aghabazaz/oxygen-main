import Image, { StaticImageData } from "next/image";
import React, { Key, ReactNode } from "react";
import LinkButton from "./LinkButton";
import { useTranslations } from "next-intl";

const CartItem = ({
  key,
  imgSrc,
  alt,
  children,
  href,
  className,
}: {
  key: Key;
  imgSrc: StaticImageData;
  alt: string;
  children: ReactNode;
  href: string;
  className?: string;
}) => {
  const t = useTranslations("Index");
  return (
    <div key={key} className={`w-full  xl:max-w-[15vw] h-[20vh] ${className}`}>
      <div
        id="blog-content"
        className="p-4 flex  w-full relative flex-col bg-white h-full items-start justify-between"
      >
        <div className="container-pentagon w-full absolute bottom-[99%] right-0 left-0  h-[17vh] bg-white  overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt}
            className="w-full h-full  right-image-pentagon   object-fill"
          />
        </div>
        <div className=" h-full">{children}</div>
        <LinkButton href={href} title={t("See more")} className="w-full" />
      </div>
    </div>
  );
};

export default CartItem;
