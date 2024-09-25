"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import arrowRight from "~/public/icons/breadCrumbArrow.svg";

const BreadCrumb = ({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) => {
  const pathname = usePathname();
  const subDirectories = pathname?.split("/").splice(2);
  const searchParams = useSearchParams();
  const locale = useLocale();
  const t = useTranslations("Index");
  const { category, productName } = Object.fromEntries(searchParams);
  const flipClass = locale === "fa" ? "flip" : "";
  return (
    <div className={`${className} hidden lg:flex items-center text-xs`}>
      <Link className="text-gray-60" href={"/"}>
        {t("Home")}
      </Link>
      <Image src={arrowRight} alt="arrow" className={`mx-2 ${flipClass}`} />
      {productName ? (
        <>
          <Link
            className="text-gray-80"
            href={`/${locale}/${subDirectories[0]}`}
          >
            {t(subDirectories[0])}
          </Link>
          <Image src={arrowRight} alt="arrow" className={`mx-2 ${flipClass}`} />
          <p> {productName}</p>
        </>
      ) : (
        subDirectories?.map((subDir, index) => {
          return (
            <div className="flex items-center" key={subDir + index}>
              <Link className="text-gray-80 " href={`/${locale}/${subDir}`}>
                {index > 0 ? title || subDir.replaceAll("-", " ") : t(subDir)}
              </Link>
              {subDirectories.length - 1 !== index ? (
                <Image
                  src={arrowRight}
                  alt="arrow"
                  className={`mx-2 ${flipClass}`}
                />
              ) : category ? (
                <>
                  <Image
                    src={arrowRight}
                    alt="arrow"
                    className={`mx-2 ${flipClass}`}
                  />
                  <p>
                    {t("category")}: {category}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default BreadCrumb;
