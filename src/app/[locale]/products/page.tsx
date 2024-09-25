export const dynamic = "force-dynamic";

import BreadCrumb from "@/components/common/BreadCrumb";
import { Suspense } from "react";
import FilteredProducts from "./components/FilteredProducts";
import ProductsPagination from "./components/ProductsPagination";
import { TProductItem } from "./api/products.types";
import { getProducts } from "./api";
import { getLocale } from "next-intl/server";

const Products = async () => {
  const locale = await getLocale();
  const data: TProductItem[] = await getProducts(locale);
  return (
    <>
      <section className="w-full min-h-screen h-full  pb-10  bg-gray-20 relative px-8 xl:px-32">
        <div className="w-full  h-14 flex items-center justify-start">
          <Suspense>
            <BreadCrumb />
          </Suspense>
        </div>
        {data && <FilteredProducts products={data} />}
        <ProductsPagination total={data.length} currentPage={1} />
      </section>
    </>
  );
};

export default Products;
