import { pathnameThatSnapScrollShoudNotHave } from "@/constant";
import { usePathname } from "next/navigation";

export const useSnapStartClassNames = () => {
 const pathname = usePathname();
 const subDirectories = pathname?.split("/").splice(1);
 const snapStartClass =
  (pathnameThatSnapScrollShoudNotHave.includes(subDirectories[1]) &&
   subDirectories.length === 2) ||
  (subDirectories[1] === "blogs" && subDirectories.length > 2)
   ? ""
   : subDirectories[1] === "products" && subDirectories.length > 2
     ? "lg:snap-start"
     : "snap-start";

 return snapStartClass;
};
