"use client";
import filterIcon from "~/public/icons/products/filter.svg";
import inventoryIcon from "~/public/icons/products/inventory.svg";
import sortIcon from "~/public/icons/products/sort.svg";
import useIcon from "~/public/icons/products/use.svg";
import FilterItem from "./FilterItem";
import {
 filterItem,
 inventoryItem,
 sortItem,
 useItem,
} from "@/constant/products";
import FilterItemMobile from "./FilterItemMobile";
import { useTranslations } from "next-intl";
import { Item } from "@/@types/filterProducts";

const Filter = ({
 onSelect,
 selectedItems,
}: {
 onSelect: (item: Item) => any;
 selectedItems: Item[];
}) => {
 return (
  <>
   <ul className=" w-full hidden lg:grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 rounded-sm p-2">
    <FilterItem
     icon={filterIcon}
     label="Filter"
     filterItems={filterItem}
     selectedItems={selectedItems}
     onSelect={(items) => {
      onSelect(items);
     }}
    />
    <FilterItem
     icon={sortIcon}
     label="Sort"
     selectedItems={selectedItems}
     filterItems={sortItem}
     onSelect={(items) => onSelect(items)}
    />
    <FilterItem
     icon={useIcon}
     label="Use"
     selectedItems={selectedItems}
     filterItems={useItem}
     onSelect={(items) => onSelect(items)}
    />
    <FilterItem
     icon={inventoryIcon}
     label="Inventory status"
     selectedItems={selectedItems}
     filterItems={inventoryItem}
     onSelect={(items) => onSelect(items)}
    />
   </ul>
   {/* Mobile */}
   <ul className=" w-full grid lg:hidden gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 rounded-sm p-2">
    <FilterItemMobile
     icon={filterIcon}
     selectedItems={selectedItems}
     label="Filter"
     filterItems={filterItem}
     onSelect={(items) => onSelect(items)}
     subMenues={[
      <FilterItemMobile
       key={"sort"}
       icon={sortIcon}
       selectedItems={selectedItems}
       label="Sort"
       filterItems={sortItem}
       wrapperClassName="border-0 mt-5"
       onSelect={(items) => onSelect(items)}
      />,
      <FilterItemMobile
       selectedItems={selectedItems}
       key={"use"}
       icon={useIcon}
       label="Use"
       filterItems={useItem}
       wrapperClassName="border-0 mt-5"
       onSelect={(items) => onSelect(items)}
      />,
      <FilterItemMobile
       selectedItems={selectedItems}
       key={"inventory"}
       icon={inventoryIcon}
       label="Inventory status"
       filterItems={inventoryItem}
       wrapperClassName="border-0 mt-5"
       onSelect={(items) => onSelect(items)}
      />,
     ]}
    />
   </ul>
  </>
 );
};

export default Filter;
