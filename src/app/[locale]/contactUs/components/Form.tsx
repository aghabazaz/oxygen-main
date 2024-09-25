"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import TextArea from "@/components/common/TextArea";
import React from "react";
import { useFormState } from "react-dom";
import { postForm } from "../action";
import { useTranslations } from "next-intl";

const initialState = {
  name: "",
  email: "",
  message: "",
  company: "",
  mobile: "",
};
const Form = () => {
  const [state, formAction] = useFormState(postForm, initialState);
  const t = useTranslations("contactUs");

  return (
    <form className="flex w-full flex-col" action={formAction}>
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <Input
          id="name"
          label={t("Name")}
          type="text"
          placeholder={t("Name and Family")}
        />
        <Input
          label={t("Company")}
          id="company"
          type="text"
          placeholder={t("Company")}
        />
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-3">
        <Input
          id="mobile"
          label={t("tel")}
          type="text"
          placeholder={t("Mobile and telephone number")}
        />
        <Input
          label={t("Email")}
          id="email"
          type="email"
          placeholder={t("Email address")}
        />
      </div>
      <TextArea
        id="message"
        rows={4}
        label={t("Message")}
        placeholder={t("Message")}
      />
      <Button
        type="submit"
        title={t("Send message")}
        className="text-gray-80 mt-5"
      />
    </form>
  );
};

export default Form;
