import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
export function useBlogs(locale: string) {
  const { data, error, isLoading } = useSWR(
    `/api/client/post?lang=${locale}`,
    fetcher
  );
  const posts = (data?.data || []).map((post: any) => {

    return {
      title: post.title,
      tags: "Quarries",
      created_at: post.created_at,
      author: post.author,
      content: post.content,
      slug: post.title,
      cover: post.cover,
      id: post.id,
      image1: post.image1,
      image2: post.image2,
      summary:post.summary
    };
  });
  return {
    data: posts,
    isLoading,
    isError: error,
  };
}
