import slabIcon from "~/public/icons/products/slab.svg";
import blockIcon from "~/public/icons/products/block.svg";
import tileIcon from "~/public/icons/products/tile.svg";
import slabTileIcon from "~/public/icons/products/slabTileIcon.svg";
import { TProductItem } from "@/app/[locale]/products/api/products.types";

export const generateCategoryIcon = (category: TProductItem["category"]) => {
  switch (category) {
    case "Block":
      return blockIcon;
    case "Slab":
      return slabIcon;
    case "Tile":
      return tileIcon;
    // case "Slab & Tile":
    //   console.log("🚀 ~ generateCategoryI2con ~ category:", category);
    //   return slabTileIcon;
    default:
      return slabTileIcon;
  }
};
