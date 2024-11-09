import { TBlogItem } from "../../api/blogs.types";

export const getBlog = async (blogId: string): Promise<{ data: TBlogItem }> => {
  const data = await fetch(
    `https://app.oxygenstones.com/api/client/post/${blogId}`,
    {
      method: "GET",
        next: { revalidate: 20 }, // Cache for 20 seconds
    }
  );
  return data.json();
};
