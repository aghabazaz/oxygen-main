import Form from "./Form";
import customerBg from "~/public/icons/products/customerReqBg.svg";
import customerBgMobile from "~/public/icons/products/customerReqBgMobile.svg";
import Image from "next/image";

const CustomerRequest = () => {
  return (
    <div>
      <div className="w-full relative flex justify-center items-end mt-10 px-8 xl:px-32 h-fit pb-10 2xl:pb-16 min-h-screen bg-gray-20">
        <div className="absolute top-0 left-0 right-0 w-full">
          <Image
            src={customerBg}
            alt="customerLine"
            className="hidden md:block"
          />
          <Image
            src={customerBgMobile}
            alt="customerLine"
            className="md:hidden w-full"
          />
        </div>
        <div className="w-full flex  items-center justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default CustomerRequest;
