"use client";
import Image from "next/image";
import abarkohPoster from "~/public/images/quarries/abarkoh2.png";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useLocale } from "next-intl";

const VideoSection = ({ item }: { item: any }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(targetRef);
  const locale = useLocale();
  useEffect(() => {
    if (
      isInView &&
      targetRef.current &&
      targetRef.current &&
      videoRef.current
    ) {
      videoRef.current.className = "custom-translate";
    }
  }, [isInView]);
  return (
    <div
      className={`relative  w-full h-fit flex items-center justify-center lg:h-screen snap-start`}
    >
      <div className="h_iframe-aparat_embed_frame flex justify-center items-center mt-10 w-[90vw] h-60 rounded md:h-[90vh] bg-transparent">
        <iframe
          src={
            locale === "fa"
              ? "https://www.aparat.com/video/video/embed/videohash/v57utxq/vt/frame?titleShow=true"
              : "https://www.youtube.com/embed/k1PkjkzdzEU?si=JX6UGUxZDw-CDLnL"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
