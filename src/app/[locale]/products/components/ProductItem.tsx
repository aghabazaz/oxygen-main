import LinkButton from "@/components/common/LinkButton";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import Image from "next/image";
import { useRef } from "react";
import { TProductItem } from "../api/products.types";
import { useLocale, useTranslations } from "next-intl";

const ProductItem = ({ item }: { item: TProductItem }) => {
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <div className="w-full bg-transparent min-h-fit flex flex-col gap-8  border-r border-l border-gray-40 p-4">
      <div
        className="h-fit  pb-2 border-b border-gray-40 px-10 lg:px-0"
        ref={ref}
      >
        <div className="w-full h-fit aspect-square relative">
          <Image
            src={item.imageSrc[0]}
            alt={item.label}
            className="w-full h-full object-fill"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-8 h-[45%] ">
        <div className="flex flex-col">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xs 2xl:text-sm truncate w-1/2 font-helveticaBold pt-4 pb-2">
              {item.label}
            </h1>
            <div className="flex items-center">
              <span
                className={`w-2 h-2 mx-1  rounded-full ${item.isAvailable ? "bg-green drop-shadow-[0px_2px_4px_#83EA00]" : "bg-red drop-shadow-[0px_2px_4px_#EA0000]"}`}
              ></span>
              <span className="text-base text-gray-60">
                {item.isAvailable ? t("available") : t("notAvailable")}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              alt="category-icon"
              src={generateCategoryIcon(item.category)}
              className="w-6 h-auto mr-2"
            />
            <span className="text-gray-60 text-xs 2xl:text-sm mx-1">
              {item.category}
            </span>
          </div>
        </div>
        <LinkButton
          title={t("see more")}
          href={{
            pathname: `/${locale}/products/${item.productName.replaceAll(" ", "-")}`,
            query: {
              productId: item.id,
            },
          }}
          className="productsLink "
        />
      </div>
    </div>
  );
};

export default ProductItem;
