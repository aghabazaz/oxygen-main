import { DOTS, usePagination } from "@/hooks/usePagination";
import rightArrow from "~/public/icons/rightArrow.svg";
import leftArrow from "~/public/icons/leftArrow.svg";
import Image from "next/image";
import { useLocale } from "next-intl";

export interface IPaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  onPageChange: (page: number | string) => void;
}

const Pagination = (props: IPaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const locale = useLocale();

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul
      className={`flex items-center justify-between bg-gray-10 px-3 py-1 rounded-full drop-shadow-xl `}
    >
      {/* right navigation arrow */}
      <li
        onClick={onPrevious}
        className={`${currentPage === 1 ? "pointer-events-none" : ""}  ${
          locale === "fa" ? "flip" : ""
        } p-2`}
      >
        <Image src={leftArrow} alt="left" width={8} height={8} />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li key={pageNumber} className=" text-gray-70 ">
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              className={`${
                pageNumber === currentPage ? "bg-yellow" : ""
              } rounded-full text-gray-70 mx-1 text-12 w-8 h-8 flex items-center justify-center`}
              onClick={() => onPageChange(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </li>
          );
        })}
      {/* left navigation arrow */}
      <li
        onClick={onNext}
        className={`${currentPage === lastPage ? "pointer-events-none" : ""} ${
          locale === "fa" ? "flip" : ""
        } rounded-full p-2 transition-all duration-500 ease-in-out hover:bg-primary hover:text-white dark:text-white `}
      >
        <Image src={rightArrow} alt="right" width={8} height={8} />
      </li>
    </ul>
  );
};

export default Pagination;
