import { TProductItem } from "../../api/products.types";

export const getProduct = async (productId: string) => {
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/product/${productId}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const { data } = await res.json();
  console.log("🚀 ~ getProduct ~ data:", data);

  return {
    data: {
      imageSrc: data.images.map((img: any) => img.url).slice(0, 2),
      label: data.title,
      category: data.product_type,
      isAvailable: data.has_inventory,
      ProductionLocationImage: data.images[1]?.url || data.images[0].url,
      StoneProductionImage: data.images[3]?.url || data.images[0].url,
      mineTypeDescription: data.mine_type_description,
      ProductFunctionalityImage: data.images[4]?.url || data.images[0].url,
      productName: data.title,
      useLocationDescription: data.use_location_description,
      id: data.id,
      description: data.stone_type_description,
      technicalAnalysisImage: data.cover,
      technicalAnalysisImageMobile: data.cover_mobile || data.cover,
      laibidMap: data.images[2]?.url || data.images[0].url,
      meta_title:data.meta_title,
      meta_description:data.meta_description
    } as TProductItem,
  };
};
