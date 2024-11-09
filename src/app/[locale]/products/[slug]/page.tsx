import BreadCrumb from "@/components/common/BreadCrumb";
import "swiper/css";
import { getProduct } from "./api";
import Analyze from "./components/Analyze";
import CustomerRequestForm from "./components/CustomerRequestForm";
import Location from "./components/Location";
import ProductDetail from "./components/ProductDetail";
import ProductFunctionality from "./components/ProductFunctionality";
import ProductImageViewer from "./components/ProductImageViewer";
import ProductMobileView from "./components/ProductMobileView";
export async function generateMetadata(context: any) {
 const { data: product } = await getProduct(context.searchParams.productId);


 return {
  title: product?.meta_title || "Oxygen",
  description:product?.meta_description || "generateMetadata"
 };
}
const Product = async (context: any) => {
 const { data: product } = await getProduct(context.searchParams.productId);

 return (
  <div className="relative w-full h-full overflow-hidden lg:overflow-visible bg-white ">
   {product ? (
    <>
     <div className="h-fit hidden lg:block">
      <ProductDetail product={product} />
      <Analyze
       imageSrc={product.technicalAnalysisImage}
       imageSrcMobile={product.technicalAnalysisImageMobile}
      />
      <Location
       label={product.label}
       des={product.useLocationDescription}
       laibidMapImage={product.laibidMap}
      />
      <div className="h-fit lg:snap-start">
       <ProductImageViewer
        imageSrc={product.ProductionLocationImage}
        alt={product.label}
       />
      </div>
      <div className="h-fit lg:snap-start">
       <ProductImageViewer
        imageSrc={product.StoneProductionImage}
        alt={product.label}
       />
      </div>
      <ProductFunctionality productData={product} />
      <CustomerRequestForm />
     </div>

     <ProductMobileView product={product} />
    </>
   ) : (
    <></>
   )}
  </div>
 );
};

export default Product;
