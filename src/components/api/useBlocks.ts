import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ISlider } from "./types";
import { ISliderData } from "../Blocks/blocks.types";
const defaultValues = [
  {
    imageSrc:
      "https://app.oxygenstones.com/storage/uploads/media/photo/51b88977-9b60-4d9c-b2d8-a0fd02f366c4.png",
    key: 0,
    leftData: {
      header: "Makia Black Block",
      body: "Travertine",
      footer: "Block",
    },
    rightData: {
      leftInfo: {
        meta: ["Maximum:80", "Average:80"],
      },
      rightInfo: {
        meta: ["At least :60", "Average:99"],
      },
    },
    href: "/",
  },
  {
    imageSrc:
      "https://app.oxygenstones.com/storage/uploads/media/photo/97da1575-e8e3-4f59-8eb5-6e74b1049055.png",
    key: 1,
    leftData: {
      header: "Laibid Crystal Block",
      body: "Travertine",
      footer: "Block",
    },
    rightData: {
      leftInfo: {
        meta: ["Maximum:87", "Average:67"],
      },
      rightInfo: {
        meta: ["At least :79", "Average:90"],
      },
    },
    href: "/",
  },
];
export function useBlocks(locale: string) {
  const { data, error, isLoading } = useSWR(
    `/api/client/product?lang=${locale}&show_main_page=slider1`,
    fetcher
  );

  const sliderData: ISliderData[] = data?.data
    .filter((el: any) => el.product_type === "Block")
    .map((item: any, idx: number) => {
      return {
        imageSrc: item.images[0].url,
        key: idx,
        leftData: {
          header: item.stone_type,
          body: item.title,
          footer: item.product_type,
        },
        rightData: {
          leftInfo: {
            meta: [
              `${locale === "fa" ? "حداکثر" : "Maximum"}:${item.density_maximum}`,
              `${locale === "fa" ? "میانگین" : "Average"}:${item.density_average}`,
            ],
          },
          rightInfo: {
            meta: [
              `${locale === "fa" ? "حداقل" : "At least"}:${item.water_absorption_at_least}`,
              `${locale === "fa" ? "میانگین" : "Average"}:${item.water_absorption_average}`,
            ],
          },
        },
        href:
          "/products/" +
          item.title.replaceAll(" ", "-") +
          "?productId=" +
          item.id,
      };
    }) as ISliderData[];

  return {
    data: sliderData || defaultValues,
    isLoading,
    isError: error,
  };
}
