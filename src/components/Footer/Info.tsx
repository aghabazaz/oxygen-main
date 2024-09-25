import { use } from "react";
import CompanyInformation from "./CompanyInformation";
import SocialMedia from "./SocialMedia";
import { useTranslations } from "next-intl";

const Info = () => {
  const t = useTranslations("footer");
  return (
    <div className="flex flex-col  h-full md:h-fit relative z-20">
      <div className="bg-gray-50 h-full  w-full flex flex-col md:flex-row items-center text-white justify-center gap-5 md:gap-0 md:justify-around px-14 min-h-[40vh] md:min-h-[20vh]">
        <CompanyInformation />
        <SocialMedia />
      </div>
      <div className="w-full  bg-yellow h-14 md:h-full text-2xsm flex items-center justify-center">
        {t("footerRights")}
      </div>
    </div>
  );
};

export default Info;
