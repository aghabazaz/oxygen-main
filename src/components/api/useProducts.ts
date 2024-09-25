import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ISlider } from "./types";
import { ISliderData } from "../Blocks/blocks.types";
import { ISlabData } from "../Slab/slab.types";

export function useProducts(item: string) {
  const { data, error, isLoading } = useSWR(
    `/api/client/product`,
    fetcher
  );

  const items: ISlabData = {
    background: [],
    thumbs: [],
  };
  data?.data
    .filter((el: any) => el.product_type === item)
    .foreach((item: any, idx: number) => {
      const bg = {
        imgSrc: item.cover,
        mobileImgSrc: item.cover,
        alt: item.title,
        key: item.title,
      };
      const thumb = {
        imgSrc: item.cover,
        key: item.title,
        label: item.title,
        content: "slab & tile",
        href: "/",
      };
      items.background.push(bg);
      items.thumbs.push(thumb);
    }) || ([] as ISliderData[]);
  return {
    data: items,
    isLoading,
    isError: error,
  };
}
