import Blocks from "@/components/Blocks";
import Blogs from "@/components/Blogs";
import Quarries from "@/components/Quarries";
import Slab from "@/components/Slab";
import WelcomeSlider from "@/components/WelcomeSlider";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <WelcomeSlider />
      <Blocks />
      <Slab />
      <Quarries />
      <Blogs />
    </>
  );
}
