export const getProducts = async (locale: string) => {
 const res = await fetch(
  `https://app.oxygenstones.com/api/client/product?lang=${locale}`,
  {
   method: "GET",
  }
 );
 const data = await res.json();

 return (
  data?.data?.map((item: any) => {
   return {
    imageSrc: [item.images[0].url],
    label: item.title,
    category: item.product_type,
    isAvailable: item.has_inventory,
    productName: item.title,
    id: item.id,
    description: item.mine_type_description,
    ProductionLocationImage: item.use_location_description,
    StoneProductionImage: item.stone_type_description,
    ProductFunctionalityImage: item.stone_type_description,
    features: [
     item.stone_type,
     item.product_type,
     item.has_inventory ? "available" : "unavailable",
     ...item.use_locations.map((location: any) => location.title),
    ],
   };
  }) || []
 );
};
