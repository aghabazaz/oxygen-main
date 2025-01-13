import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ISlider } from "./types";

export function useSlider() {
  const { data, error, isLoading } = useSWR(
      `/api/client/slider`,
      fetcher,
      {
        refreshInterval: 60000, // Automatically refresh data every 60 seconds
        revalidateOnFocus: true, // Revalidate on window focus
      }
  );
  return {
    data: data?.data || ([] as ISlider[]),
    isLoading,
    isError: error,
  };
}
