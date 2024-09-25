import { Item } from "@/@types/filterProducts";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode, useState } from "react";
import arrowDown from "~/public/icons/products/arrowDown.svg";

type FilterItemMobileProps = {
  icon: string;
  label: string;
  filterItems: Item[];
  subMenues?: ReactNode[];
  wrapperClassName?: string;
  onSelect?: (items: Item) => any;
  selectedItems: Item[];
};
const FilterItemMobile = ({
  icon,
  label,
  filterItems,
  subMenues,
  wrapperClassName,
  onSelect,
  selectedItems,
}: FilterItemMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("Index");
  return (
    <li
      className={`w-full border relative transition-[max-height]  duration-150 bg-gray-20 lg:bg-transparent  rounded-8 border-gray-40 ease-in-out overflow-hidden h-fit ${isOpen ? "max-h-[999px]" : "max-h-11"} ${wrapperClassName}`}
    >
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`flex  items-center  w-full justify-between  `}
      >
        <div className="flex items-center">
          <div
            className={`w-11 h-11 2xl:w-14 2xl:h-14 ${locale === "fa" ? "ml-2" : "mr-2"} rounded-8 bg-yellow flex items-center justify-center`}
          >
            <Image src={icon} alt="sort icon" className="w-5 h-5" />
          </div>
          <span className="text-base text-gray-60">{t(label)}</span>
        </div>
        <div className="mr-4">
          <Image src={arrowDown} alt="arrow down" className="w-3 h-auto" />
        </div>
      </button>
      <ul
        className={`px-5 pb-2  z-10   top-full  overflow-y-auto bg-gray-20 max-h-[300px]`}
      >
        {filterItems?.map((item) => {
          return (
            <li
              key={item.id}
              className="w-full flex h-12 items-center justify-between py-2 border-b  border-gray-40 "
            >
              <label
                htmlFor={item.name}
                className="w-full flex items-center text-base text-gray-60"
              >
                {generateCategoryIcon(item.name) && (
                  <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-gray-light   ">
                    <Image
                      src={generateCategoryIcon(item.name)}
                      alt={item.name}
                      className="w-5 h-5 "
                    />
                  </div>
                )}
                <span className="text-base mx-1 text-gray-60">
                  {" "}
                  {t(item.name)}
                </span>
              </label>
              <input
                type="checkbox"
                name={item.name}
                id={item.name}
                onChange={(e) => {
                  onSelect?.(item);
                }}
                checked={selectedItems?.includes(item)}
              />
            </li>
          );
        })}
      </ul>
      {subMenues && <ul>{subMenues.map((el) => el)}</ul>}
    </li>
  );
};

export default FilterItemMobile;
