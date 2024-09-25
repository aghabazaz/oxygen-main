import { StaticImageData } from "next/image";

export interface ISliderData {
  imageSrc: StaticImageData;
  key: string;
  leftData: {
    header: string;
    body: string;
    footer: string;
  };
  rightData: {
    leftInfo: {
      meta: string[];
    };
    rightInfo: {
      meta: string[];
    };
  };
  href: string;
}
