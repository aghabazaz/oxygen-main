import { ReactNode } from "react";

const Button = ({
  type = "button",
  title,
  className,
  children,
  onClick,
}: {
  type?: HTMLButtonElement["type"];
  title: string;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className={`bg-yellow  h-10 flex items-center justify-center rounded-lg ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center gap-2">
        <span className="text-2xsm font-helveticaBold">{title}</span>
        {children}
      </div>
    </button>
  );
};

export default Button;
