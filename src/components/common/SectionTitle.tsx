import { twMerge } from "tailwind-merge";

const SectionTitle = ({
  title,
  className,
  titleClassName,
}: {
  title: string;
  className?: string;
  titleClassName?: string;
}) => {
  return (
    <div className={`flex items-baseline ${className}`}>
      <div className="w-6 h-6 box-shadow-custom bg-yellow" />
      <h4
        className={twMerge(
          `text-gray-60 text-sm md:text-md mx-2`,
          titleClassName,
        )}
      >
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
