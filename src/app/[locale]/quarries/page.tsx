import Image from "next/image";
import leftSvg from "~/public/icons/quarries/left.svg";
import topSvg from "~/public/icons/quarries/top.svg";
import cama from "~/public/images/footer/cama.png";
import abarkohBg from "~/public/images/quarries/abarkoh1.png";
import bottomMap from "~/public/images/quarries/bottomMap.png";
import laibidBg from "~/public/images/quarries/laibidBg.png";
import topMap from "~/public/images/quarries/topMap.png";
import FirstPic from "./components/FirstPic";
import QuarryGallery from "./components/QuarryGallery";
import QuarryInfoLocation from "./components/QuarryInfoLocation";
import VideoSection from "./components/VideoSection";
import { getLocale } from "next-intl/server";
import {getBlog} from "@/app/[locale]/blogs/[slug]/api";

const defaultSection = {
  title: "title",
  description: "description",
  cover:
    "https://app.oxygenstones.com/storage/uploads/media/photo/d7ece0f8-a414-4dca-a6a2-889c0909cab0.jpg",
  created_at: "2021-10-10",
};
export async function generateMetadata() {
    const locale = await getLocale();
    const res = await fetch(
        `https://app.oxygenstones.com/api/client/page/${locale}/quarries`,
        { next: { revalidate: 20 } }
    );
    const { data } = await res.json();

    return {
        title: data.sections[0]?.meta_title || "Oxygen",
        description:data.sections[0]?.meta_description || "Explore in the world"
    };
}
const Quarries = async () => {
  const locale = await getLocale();
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/page/${locale}/quarries`,
    { next: { revalidate: 20 } }
  );

  const { data } = await res.json();
  console.log("🚀 ~ Quarries ~ t:", data.sections.length);
  return (
    <div className="w-full h-full pb-10 bg-white">
      <FirstPic item={data.sections[6] || data.sections[0] || defaultSection} />
      <div className="relative flex w-full gap-10 px-8 tems-center lg:my-10 md:px-32">
        <QuarryInfoLocation
          isCamma={true}
          item={data.sections[1] || defaultSection}
        />
          {leftSvg && <Image
          src={leftSvg}
          alt="svg"
          className="absolute top-0 left-0 hidden h-full lg:block w-fit "
        />}
      </div>
      <QuarryGallery imageSrc={data.sections[2].cover} className="z-10">
        <h3 className="w-full text-sm text-gray-20 md:w-3/4 md:text-xl 2xl:text-2xl">
          {data.sections[2].title}
        </h3>
      </QuarryGallery>
      <div className="relative flex items-center w-full h-full gap-10 px-8 md:h-screen lg:mt-10 lg:snap-start md:px-32">
          {topSvg && <Image
          src={topSvg}
          alt="svg"
          className="absolute left-0 right-0 hidden w-full h-auto lg:block -top-48 "
        />}
        <QuarryInfoLocation item={data.sections[3] || defaultSection} isCamma />
      </div>
      <QuarryGallery imageSrc={(data.sections?.[4] || defaultSection).cover}>
          {cama && <Image src={cama} alt="cama" className="w-8 h-auto mb-2 2xl:w-10" />}
        <h3 className="w-full text-sm text-black md:w-3/4 md:text-xl 2xl:text-2xl">
          {(data.sections?.[4] || defaultSection).title}
        </h3>
      </QuarryGallery>
      <VideoSection item={data.sections?.[5] || defaultSection} />
    </div>
  );
};

export default Quarries;
