import Input from "@/components/common/Input";
import { useTranslations } from "next-intl";
import React from "react";

const PersonalInformation = () => {
  const t = useTranslations("contactUs");
  return (
    <div className="">
      <h4 className="text-sm text-center text-gray-80">
        {t("Personal Information")}
      </h4>
      <div className="flex flex-col items-center w-full md:flex-row lg:gap-3">
        <Input
          label={t("First Name")}
          type="text"
          id="lname"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Last Name")}
          id="name"
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
      </div>
      <div className="flex flex-col items-center w-full md:flex-row lg:gap-3">
        <Input
          label={t("Phone Number")}
          id="mobile"
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Email address")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
          id="email"
        />
      </div>
    </div>
  );
};

export default PersonalInformation;
