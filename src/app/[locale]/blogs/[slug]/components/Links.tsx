"use client";
import Link from "next/link";

import SocialMedia from "@/components/Footer/SocialMedia";
import Instagram from "@/components/Svg/Instagram.svg";
import Linkedin from "@/components/Svg/Linkedin.svg";
import Telegram from "@/components/Svg/Telegram.svg";
import Whatsapp from "@/components/Svg/Whatsapp.svg";
import YouTube from "@/components/Svg/YouTube.svg";
import { useEffect, useState } from "react";

const Links = () => {
  const [path, setPath] = useState("");
  //   const fullPathname = () => {
  //     return window.location.href;
  //   };
  useEffect(() => {
    setPath(window.location.href);
  }, []);

  return (
    <div className={`flex w-full justify-center gap-3 items-center `}>
      <Link href={"tg://msg?text=" + path}>
        <Telegram className="w-6" fill={"#7A7A7A"} />
      </Link>
      <Link
        href={"https://web.whatsapp.com/send?text=" + path}
        data-action="share/whatsapp/share"
      >
        <Whatsapp className="w-6" fill={"#7A7A7A"} />
      </Link>
      {/* <Link href={"/"}>
      <YouTube className="w-6" fill={"#7A7A7A"} />
    </Link> */}
      <Link
        href={"https://www.linkedin.com/sharing/share-offsite/?url=" + path}
      >
        <Linkedin className="w-6" fill={"#7A7A7A"} />
      </Link>
      <Link href={"/"}>
        <Instagram className="w-6" fill={"#7A7A7A"} />
      </Link>
    </div>
  );
};
export default Links;
