import { StaticImageData } from "next/image";
export type TBlogItem = {
  title: string;
  tags: string;
  created_at: string;
  author: string;
  content: string;
  slug: string;
  cover: string;
  image1: string;
  image2: string;
  id: number;
  summary:string;
  meta_title:string;
  meta_description:string;
};
