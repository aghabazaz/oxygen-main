import { useLocale } from "next-intl";
import React, { use, useId } from "react";

const Input = ({
  type = "text",
  label,
  placeholder,
  labelClassName = "bg-white",
  id = "",
}: {
  type?: HTMLInputElement["type"];
  label?: string;
  placeholder?: string;
  labelClassName?: string;
  id?: string;
}) => {
  const newId = useId();
  const locale = useLocale();
  return (
    <div className="relative w-full">
      <label
        htmlFor={id || newId}
        className={`relative top-3 ${locale === "fa" ? "-left-4" : "left-4"} px-1 text-12 text-gray-80 ${labelClassName}`}
      >
        {label}
      </label>
      <input
        id={id || newId}
        name={id || newId}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xsm py-3 px-5 bg-transparent border-2 border-gray-40 focus:outline-none placeholder:text-gray-60 placeholder:text-base "
      />
    </div>
  );
};

export default Input;
