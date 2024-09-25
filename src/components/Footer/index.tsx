"use client";
import { pathnameThatSnapScrollShoudNotHave } from "@/constant";
import Image from "next/image";
import { usePathname } from "next/navigation";
import footerBg from "~/public/images/footer/footerBg.png";
import footerBgMobile from "~/public/images/footer/footerBgMobile.png";
import About from "./About";
import Info from "./Info";
import { useEffect, useState } from "react";
import { useSnapStartClassNames } from "@/hooks/useSnapStartClassNames";

const Footer = () => {
  const pathname = usePathname();
  const subDirectories = pathname?.split("/").splice(1);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;

    setIsSafari(
      /safari/i.test(userAgent) &&
        !/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i.test(
          userAgent
        )
    );
  }, []);

  const [isChromeIOS, setIsChromeIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    setIsChromeIOS(
      /crios/i.test(userAgent) && /iphone|ipod|ipad/i.test(userAgent)
    );
  }, []);

  const snapStartClass = useSnapStartClassNames();

  const paddingBottonInIOS = isChromeIOS
    ? "pb-24 lg:pb-0"
    : isSafari
      ? "pb-20 lg:pb-0"
      : "";

  return (
    <footer
      className={`h-svh  lg:h-screen flex flex-col lg:max-h-screen ${snapStartClass} ${paddingBottonInIOS} relative w-full bg-white`}
    >
      <About />
      <Info />
      <Image
        src={footerBg}
        alt="oxygenFooter"
        className="absolute bottom-0 z-10 hidden w-auto translate-x-1/2 md:block h-1/2 right-1/2"
      />
      <Image
        src={footerBgMobile}
        alt="oxygenFooter"
        className="absolute bottom-0 z-10 w-full md:hidden h-3/4"
      />
    </footer>
  );
};

export default Footer;
