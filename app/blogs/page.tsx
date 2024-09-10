import { getBlogData } from "../../lib/blog";
import BlogList from "../../components/BlogList";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getBlogData();

  return (
    <main className="border-2 border-white m-2 h-svh ">
      <div className="grid grid-rows-1 md:grid-cols-6 md:grid-rows-1">
        <div className="border-b-2 border-white h-14 grid grid-cols-12 gap-0 md:col-span-5">
          <Link
            href="/"
            className=" border-r-2 border-white h-full col-span-2 md:col-span-1 flex justify-center items-center"
          >
            <p className="text-white text-center text-lg md:text-3xl">0714</p>
          </Link>
          <div className="h-full col-span-10 flex justify-center md:justify-start items-center pl-2">
            <p className="text-white text-xl md:pl-2 md:text-3xl">Blogs.</p>
          </div>
        </div>
        <div className="border-b-2 border-white hidden  md:grid md:grid-cols-1 md:h-14">
          <Link
            href="/"
            className="hidden md:flex md:justify-center items-center border-r-2 md:border-l-2 border-white "
          >
            <p className="text-white text-2xl text-center hover:scale-110 hover:underline transition-transform duration-300 ease-in-out">
              Return
            </p>
          </Link>
        </div>
      </div>
      <BlogList blogs={blogs} />
    </main>
  );
}
