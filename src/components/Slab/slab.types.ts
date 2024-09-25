import { StaticImageData } from "next/image";

export interface ISlabData {
  background: {
    imgSrc: StaticImageData;
    mobileImgSrc?: StaticImageData;
    alt: string;
    key: string;
  }[];
  thumbs: {
    mobileImgSrc?: StaticImageData;
    imgSrc: StaticImageData;
    key: string;
    label: string;
    content: string;
    href: string;
  }[];
}
