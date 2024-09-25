import CompanyInformation from "@/components/Footer/CompanyInformation";
import SocialMedia from "@/components/Footer/SocialMedia";
import Form from "./Form";

const SendMessage = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-5 text-gray-60">
      <div className="flex flex-col gap-10">
        <CompanyInformation className="text-gray-60 " />
        <SocialMedia
          fillSvgColor="#7A7A7A"
          wrapperClassName="md:w-full"
          className="md:w-1/3"
        />
      </div>
      <Form />
    </div>
  );
};

export default SendMessage;
