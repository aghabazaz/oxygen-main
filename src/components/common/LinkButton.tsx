import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { ReactNode } from "react";

const LinkButton = ({
  href,
  title,
  className,
}: {
  href: Url;
  title: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`bg-yellow  h-10 flex items-center justify-center rounded-lg ${className}`}
    >
      <div className="flex justify-center items-center gap-2 h-full">
        <span className="text-2xsm font-helveticaBold">{title}</span>
        <span className="text-sm mb-1">+</span>
      </div>
    </Link>
  );
};

export default LinkButton;
