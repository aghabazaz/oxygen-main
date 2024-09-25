import { useLocale } from "next-intl";
import React, { TextareaHTMLAttributes, useId, useState } from "react";

const TextArea = ({
  label,
  placeholder,
  rows,
  cols,
  labelClassName = "bg-white",
  id = new Date().toLocaleString(),
}: {
  label?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  labelClassName?: string;
  id?: string;
}) => {
  const newId = useId();
  const locale = useLocale();

  const [value, setValue] = useState("");
  return (
    <div className="relative w-full">
      <label
        htmlFor={id}
        className={`relative top-3 ${locale === "fa" ? "-left-4" : "left-4"} px-1 text-12 text-gray-80 ${labelClassName}`}
      >
        {label}
      </label>
      <textarea
        id={id + "textarea"}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className="w-full rounded-xsm py-3 px-5 bg-transparent border-2 border-gray-40 focus:outline-none placeholder:text-gray-60 placeholder:text-base "
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <input type="hidden" name={id || newId} value={value} />
    </div>
  );
};

export default TextArea;
