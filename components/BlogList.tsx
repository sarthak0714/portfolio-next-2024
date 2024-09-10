import Link from "next/link";
import { BlogPost } from "../types/blog";

interface BlogListProps {
  blogs: BlogPost[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <ul className="">
      {blogs.map((blog, idx) => (
        <li key={blog.slug} className={` `}>
          <Link href={`/blog/${blog.slug}`} className="  block hover:underline">
            <div className="py-2 px-4 flex justify-between md:justify-normal md:gap-2 items-center">
              <h2 className="text-lg md:text-2xl font-bold">
                &gt; {blog.title}
              </h2>
              <p className="text-white opacity-50 text-sm md:text-lg">
                [{blog.date}]
              </p>
            </div>

            <p className="px-2 pb-2">{blog.excerpt}</p>
            <div className="border-y-2  border-white h-6 diagonal-stripes "></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
