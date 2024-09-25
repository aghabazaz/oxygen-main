import PersonalInformation from "./PersonalInformation";
import CompanyInformation from "./CompanyInformation";
import Button from "@/components/common/Button";
import Rate from "./Rate";
import TextArea from "@/components/common/TextArea";
import { useTranslations } from "next-intl";
import { useFormState } from "react-dom";
import { postForm } from "../action";
import { useEffect, useState } from "react";
const initialState = {
  name: "",
  lname: "",
  email: "",
  message: "",
  company: "",
  mobile: "",
  mobileCompany: "",
  emailCompany: "",
  companyWebsite: "",
  rate: 0,
};
const Form = () => {
  const t = useTranslations("contactUs");
  const [state, formAction] = useFormState(postForm, initialState);
  const [alert, setAlert] = useState("");
  useEffect(() => {
    if (state?.message === "Added ") {
      setAlert("AddedSuccessfully");
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="flex flex-col w-full md:w-1/2 lg:gap-6 2xl:gap-12"
    >
      {alert && (
        <div className="p-4 my-2 rounded bg-[#ffce2f82] opa">
          {t("AddedSuccessfully")}
        </div>
      )}
      <PersonalInformation />
      <CompanyInformation />
      <div className="w-full lg:hidden">
        <TextArea
          id="message"
          rows={4}
          label={t("Your message")}
          placeholder={t("Your message")}
          labelClassName="bg-gray-20"
        />
      </div>
      <div className="lg:hidden">
        <Rate buttonClassName="border-2 border-gray-40" />
      </div>
      <p className="hidden text-xs text-center 2xl:text-sm text-gray-40 md:block">
        {t("RequestDetails")}
      </p>
      <Button
        type="submit"
        title={t("Send Request")}
        className="mt-5 text-gray-80"
      >
        <span>+</span>
      </Button>
    </form>
  );
};

export default Form;
