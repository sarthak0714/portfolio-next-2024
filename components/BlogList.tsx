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
          <Link href={`/blogs/${blog.slug}`} className="  block ">
            <div className="py-2 px-4  md:gap-2 ">
              <h2 className="hover:underline text-lg md:text-2xl ">
                &gt; {blog.title}{" "}
                <span className="text-white opacity-50 text-sm md:text-lg">
                  [{blog.date}]
                </span>
              </h2>
            </div>

            <p className=" px-4 md:px-8 pb-2 text-justify text-sm md:text-lg italic opacity-60">
              {blog.excerpt}
            </p>
            <div className="border-y-2  border-white h-6 diagonal-stripes "></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
