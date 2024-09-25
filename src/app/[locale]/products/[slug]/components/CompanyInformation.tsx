import Input from "@/components/common/Input";
import { useTranslations } from "next-intl";
import React from "react";

const CompanyInformation = () => {
  const t = useTranslations("contactUs");

  return (
    <div className="hidden lg:block">
      <h4 className="text-sm text-center text-gray-80">
        {t("Company Information")}
      </h4>
      <div className="flex flex-col items-center w-full gap-3 md:flex-row">
        <Input
          label={t("Company Name")}
          id="company"
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Company Website")}
          id="companyWebsite"
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
      </div>
      <div className="flex flex-col items-center w-full gap-3 md:flex-row">
        <Input
          id="mobileCompany"
          label={t("Phone Number")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Email address")}
          id="emailCompany"
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
      </div>
    </div>
  );
};

export default CompanyInformation;
