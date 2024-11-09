import Image from "next/image";
import catalogBg from "~/public/images/catalog/freeBook.jpg";
import catalogBgMobile from "~/public/images/catalog/catalogMobil.jpg";
import cama from "~/public/images/footer/cama.png";
import oxygenLogoText from "~/public/images/footer/logoText.png";
import cubic from "~/public/icons/catalog/cubic.svg";
import downloadIcon from "~/public/icons/catalog/download.svg";
import Button from "@/components/common/Button";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
export async function generateMetadata() {
  const locale = await getLocale();
  const res = await fetch(
      `https://app.oxygenstones.com/api/client/page/${locale}/catalog`,
      { next: { revalidate: 20 } }
  );
  const { data } = await res.json();

  return {
    title: data.sections[0]?.meta_title || "Oxygen",
    description:data.sections[0]?.meta_description || "Explore in the world"
  };
}
const catalog = async () => {
  const t = await getTranslations("catalog");
  const locale = await getLocale();
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/page/${locale}/catalog`,
      { next: { revalidate: 20 } }
  );
  const { data } = await res.json();
  return (
    <section className="w-full text-white h-svh lg:h-screen snap-start relative">
      <div
        className={`w-full bg-yellow h-full relative ${locale === "fa" ? "flip" : ""}`}
      >
        <Image
          src={catalogBg}
          alt="oxygen-catalog"
          className={`w-full object-cover hidden lg:flex h-full ${locale === "fa" ? "flip" : ""}`}
        />
        <Image
          src={catalogBgMobile}
          alt="oxygen-catalog"
          className={`w-full object-cover lg:hidden h-full ${locale === "fa" ? "flip" : ""}`}
        />
        <div className="absolute  left-0 min-w-[250px] lg:min-w-[400px]  m-10 lg:m-32 bottom-0 border-l-2 border-b-2 border-yellow w-fit h-fit z-20">
          <div
            className={`gap-4 2xl:gap-5 p-5 flex flex-col ${locale === "fa" ? "w-full items-end" : "w-fit"}`}
          >
            <Image
              src={cama}
              alt="cama"
              className={`w-8 2xl:w-10 h-auto  ${locale === "fa" ? "flip" : ""}`}
            />
            <div className="flex items-center ">
              <Image
                src={cubic}
                alt="cubic"
                className=" w-16 h-16 2xl:w-20 2xl:h-20"
              />
              <Image
                src={cubic}
                alt="cubic"
                className="ml-2 w-16 h-16 2xl:w-20 2xl:h-20"
              />
            </div>
            <div className=" border-b-5 border-yellow w-fit pb-5">
              <Image
                src={oxygenLogoText}
                alt="oxygen logo"
                className={`w-44 h-auto ${locale === "fa" ? "flip" : ""}`}
              />
            </div>
            <p
              className={`text-white w-full font-helveticaBold text-xs 2xl:text-sm ${locale === "fa" ? "flip" : ""}`}
            >
              {t("downloadTheCatalog")}
            </p>

            <Link
              target="_blank"
              href={data.sections?.[0]?.media || ""}
              className={`bg-yellow  h-10 flex items-center justify-center rounded-lg text-black  ${locale === "fa" ? "flip w-2/5 " : "w-3/4 "}`}
            >
              <div className="flex justify-center items-center gap-2">
                <span className="text-2xsm font-helveticaBold">
                  {t("download")}
                </span>
                <Image src={downloadIcon} alt="download" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default catalog;
