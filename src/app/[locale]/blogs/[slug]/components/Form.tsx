"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import React from "react";
import Rate from "./Rate";
import { useTranslations } from "next-intl";

const Form = () => {
  const t = useTranslations("contactUs");

  return (
    <form className="flex w-full md:w-1/2  flex-col justify-end h-full">
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <Input
          label={t("First Name")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Last Name")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <Input
          label={t("Phone Number")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
        <Input
          label={t("Email address")}
          type="text"
          placeholder=""
          labelClassName="bg-gray-20"
        />
      </div>
      <TextArea
        rows={4}
        label={t("Message")}
        placeholder={t("Message")}
        labelClassName="bg-gray-20"
      />
      <div className="">
        <Rate buttonClassName="border-2 border-gray-40" />
      </div>

      <Button
        type="button"
        title={t("Send Request")}
        className="text-gray-80 mt-5"
      >
        <span> +</span>
      </Button>
    </form>
  );
};

export default Form;
