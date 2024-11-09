import FourthSection from "./components/FourthSection";
import LastSection from "./components/LastSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FirstSection from "./components/FirstSecton";
import { getLocale } from "next-intl/server";

const defaultSection = {
  title: "title",
  description: "description",
  cover: "https://app.oxygenstones.com/uploads/2021/10/About-us-1-1.jpg",
};
export async function generateMetadata() {
    const locale = await getLocale();
    const res = await fetch(
        `https://app.oxygenstones.com/api/client/page/${locale}/about-us`,
        { next: { revalidate: 20 } }
    );
    const { data } = await res.json();

    return {
        title: data.sections[0]?.meta_title || "Oxygen",
        description:data.sections[0]?.meta_description || "Explore in the world"
    };
}
const AboutUs = async () => {
  const locale = await getLocale();
  const res = await fetch(
    `https://app.oxygenstones.com/api/client/page/${locale}/about-us`,
      { next: { revalidate: 20 } }
  );
  const { data } = await res.json();
  return (
    <section className="w-full relative h-full pb-10 bg-gray-20  px-8 xl:px-32 4k:px-72">
      <FirstSection />
      <SecondSection item={data.sections?.[0] || defaultSection} />
      <ThirdSection item={data.sections?.[1] || defaultSection} />
      <FourthSection item={data.sections?.[2] || defaultSection} />
      <LastSection />
    </section>
  );
};

export default AboutUs;
