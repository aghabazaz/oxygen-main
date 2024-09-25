import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ISlider } from "./types";
import { ISliderData } from "../Blocks/blocks.types";
import { ISlabData } from "../Slab/slab.types";

export function useSlabs(locale: string) {
  const { data, error, isLoading } = useSWR(
    `/api/client/product?lang=${locale}&show_main_page=slider2`,
    fetcher
  );

  const items: ISlabData = {
    background: [],
    thumbs: [],
  };

  const slabs =
    data?.data.filter(
      (el: any) =>
        el.product_type === "Slab" || el.product_type === "‌‌Slab & Tile"
    ) || [];

  slabs.slice(0, 4).forEach((item: any, idx: number) => {
    const bg = {
      imgSrc: item.images[5]?.url || item.images[0].url,
      mobileImgSrc: item.images[5].url,
      alt: item.title,
      key: item.title,
    };
    const thumb = {
      imgSrc: item.images[7]?.url || item.images[0].url,
      mobileImgSrc: item.images[6].url,
      key: item.title,
      label: item.title,
      content: "slab & tile",
      href:
        "/products/" +
        item.title.replaceAll(" ", "-") +
        "?productId=" +
        item.id,
    };
    items.background.push(bg);
    items.thumbs.push(thumb);
  });

  return {
    data: items,
    isLoading,
    isError: error,
  };
}
