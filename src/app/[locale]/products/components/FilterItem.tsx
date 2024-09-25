import { Item } from "@/@types/filterProducts";
import { generateCategoryIcon } from "@/utils/categoryIcon";
import {
  UseSelectState,
  UseSelectStateChangeOptions,
  useSelect,
} from "downshift";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrowDown from "~/public/icons/products/arrowDown.svg";

type FilterItemProps = {
  icon: string;
  label: string;
  filterItems: Item[];
  wrapperClassName?: string;
  onSelect?: (items: Item) => any;
  selectedItems?: Item[];
};

function itemToString(item: Item | null) {
  return item ? item.name : "";
}
function stateReducer(
  state: UseSelectState<Item>,
  actionAndChanges: UseSelectStateChangeOptions<Item>
) {
  const { changes, type } = actionAndChanges;
  switch (type) {
    case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
    case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
    case useSelect.stateChangeTypes.ItemClick:
      return {
        ...changes,
        isOpen: true, // Keep menu open after selection.
        highlightedIndex: state.highlightedIndex,
      };
    default:
      return changes;
  }
}

const FilterItem = ({
  icon,
  label,
  filterItems,
  wrapperClassName,
  selectedItems,
  onSelect,
}: FilterItemProps) => {
  const t = useTranslations("Index");
  const locale = useLocale();
  const { isOpen, getToggleButtonProps, getMenuProps, getItemProps } =
    useSelect({
      items: filterItems,
      itemToString,
      stateReducer,
      selectedItem: null,
      onSelectedItemChange: ({ selectedItem }) => {
        if (!selectedItem) {
          return;
        }
        onSelect && onSelect(selectedItem);
      },
    });

  return (
    <li
      className={`border overflow-hidden h-fit border-gray-40 rounded-8 ${wrapperClassName}`}
    >
      <div className=" flex flex-col gap-1">
        <div
          className="flex justify-between items-center cursor-pointer"
          {...getToggleButtonProps()}
        >
          <div className="flex w-full  items-center h-full">
            <div
              className={`w-11 h-11 2xl:w-14 2xl:h-14 rounded-8 bg-yellow flex items-center justify-center ${locale === "fa" ? "ml-2" : "mr-2"}`}
            >
              <Image src={icon} alt="sort icon" className="w-5 h-5 " />
            </div>
            <span className="text-base text-gray-60">{t(label)}</span>
          </div>

          <div className="mr-4">
            <Image src={arrowDown} alt="arrow down" className="w-3 h-auto" />
          </div>
        </div>
      </div>
      <ul
        className={`px-5  z-10   top-full  overflow-y-auto  ease-in-out transition-[max-height]  duration-150 bg-gray-20 ${isOpen ? "max-h-[999px]" : "max-h-0"}`}
        {...getMenuProps()}
      >
        {isOpen &&
          filterItems.map((item, index) => {
            return (
              <li
                key={item.id}
                className="w-full flex h-12 items-center justify-between cursor-pointer py-2 border-b  border-gray-40 "
                {...getItemProps({
                  item,
                  index,
                  "aria-selected": selectedItems?.includes(item),
                })}
              >
                <div className="flex">
                  {generateCategoryIcon(item.name) && (
                    <div className="w-8 h-8 mr-2 flex items-center justify-center rounded-full bg-gray-light   ">
                      <Image
                        src={generateCategoryIcon(item.name)}
                        alt={item.name}
                        className="w-5 h-5 "
                      />
                    </div>
                  )}
                  <span className="text-base text-gray-60">{t(item.name)}</span>
                </div>
                <input
                  type="checkbox"
                  className="h-3 w-3"
                  checked={selectedItems?.includes(item)}
                  value={item.name}
                  onChange={() => null}
                />
              </li>
            );
          })}
      </ul>
    </li>
  );
};

export default FilterItem;
