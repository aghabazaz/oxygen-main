import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function useSettings() {
  const { data, error, isLoading } = useSWR(`/api/client/settings`, fetcher, );

  const formated: any = {
    telegram: "t.me/esamani77",
    fa_title: "اکسیژن",
    en_title: "oxygen",
    email: "info@oxygenstones.com",
    phone: "+98 (31) 33801719",
    fa_address: "",
    en_address: "24th Street . Mahmoudabad industrial Zone. Esfahan.Iran",
    whatsapp: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    main_page_slug: "quarries",
  };
  if (data) {
    for (let i = 0; i < data.data.length; i++) {
      const el = data.data[i];
      formated[el.title] = el.value;
    }
  }
  return {
    data: formated,
    isLoading,
    isError: error,
  };
}
