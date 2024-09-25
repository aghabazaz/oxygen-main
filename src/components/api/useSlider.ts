import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { ISlider } from "./types";

export function useSlider() {
  const { data, error, isLoading } = useSWR(`/api/client/slider`, fetcher);
  return {
    data: data?.data || ([] as ISlider[]),
    isLoading,
    isError: error,
  };
}
