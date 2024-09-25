import { TBlogItem } from "./blogs.types";

export const getBlogs = async (
  locale: string
): Promise<{ data: TBlogItem[] }> => {
  const data = await fetch(
    `https://app.oxygenstones.com/api/client/post?lang=${locale}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  return data.json();
};
