"use client";
import React, { Ref, useRef, useState } from "react";
import ProductItem from "./ProductItem";
import Filter from "./Filter";
import { usePathname, useRouter } from "next/navigation";
import { TProductItem } from "../api/products.types";
import { Item } from "@/@types/filterProducts";

const FilteredProducts = ({
 products: allProducts,
}: {
 products: TProductItem[];
}) => {
 const [products, setproducts] = useState(allProducts);
 const [selectedItems, setSelectedItems] = useState<Item[]>([]);

 const filterData = (item: Item) => {
  const index = selectedItems.indexOf(item);
  let filteredSelectedItem = [];

  if (index > 0) {
   setSelectedItems([
    ...selectedItems.slice(0, index),
    ...selectedItems.slice(index + 1),
   ]);
   filteredSelectedItem = [
    ...selectedItems.slice(0, index),
    ...selectedItems.slice(index + 1),
   ];
  } else if (index === 0) {
   filteredSelectedItem = [...selectedItems.slice(1)];
   setSelectedItems([...selectedItems.slice(1)]);
  } else {
   filteredSelectedItem = [...selectedItems, item];
   setSelectedItems([...selectedItems, item]);
  }

  if (filteredSelectedItem.length > 0) {
   setproducts(
    allProducts.filter((product) => {
     return filteredSelectedItem.every((item) => {
      return product.features.includes(item.name);
     });
    })
   );
  } else {
   setproducts(allProducts);
  }
 };
 return (
  <div className="fle flex-col relative w-full gap-5 h-full mb-28">
   <div className="w-full h-20  absolute z-10 top-0">
    <Filter
     selectedItems={selectedItems}
     onSelect={(item) => filterData(item)}
    />
   </div>
   <div className="w-full pt-20 grid gap-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 ">
    {products.map((item) => {
     return <ProductItem item={item} key={item.id} />;
    })}
   </div>
  </div>
 );
};

export default FilteredProducts;
