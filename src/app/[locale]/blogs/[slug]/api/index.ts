import { TBlogItem } from "../../api/blogs.types";

export const getBlog = async (blogId: string): Promise<{ data: TBlogItem }> => {
  const data = await fetch(
    `https://app.oxygenstones.com/api/client/post/${blogId}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  return data.json();
};
