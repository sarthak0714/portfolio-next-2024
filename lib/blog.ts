import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { BlogPost } from "../types/blog";

const blogsDirectory = path.join(process.cwd(), "public/blogs");

export function getBlogData(): BlogPost[] {
  const filePath = path.join(blogsDirectory, "blog.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileContents);
}

export function getAllBlogSlugs(): string[] {
  const blogs = getBlogData();
  return blogs.map((blog) => blog.slug);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<{ content: string; metadata: BlogPost } | null> {
  const blogs = getBlogData();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return null;

  const fullPath = path.join(blogsDirectory, blog.contentFile);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const { content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    metadata: blog,
  };
}
