import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import searchIcon from "~/public/icons/menu/search.svg";

const Search = ({ setIsShowMobile }: { setIsShowMobile?: any }) => {
  const t = useTranslations("Index");
  const router = useRouter();
  const [value, setValue] = useState("");
  const locale = useLocale();
  const search = () => {
    router.push("/" + locale + "/products?search=" + value);
    setIsShowMobile && setIsShowMobile(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        search();
      }}
      className="flex items-center justify-start w-full gap-2 p-2 border border-gray-20 rounded-8 lg:border-none lg:p-0 lg:w-1/2"
    >
      <Image
        onClick={() => {
          search();
        }}
        src={searchIcon}
        width={24}
        height={24}
        alt="search"
      />
      <input
        className="text-[16px] text-gray-60 border-none outline-none"
        placeholder={t("Search")}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default Search;
