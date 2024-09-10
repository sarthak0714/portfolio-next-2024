import { getBlogPostBySlug, getAllBlogSlugs } from "../../../lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="border-2 border-white m-2  ">
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
            href="/blogs"
            className="hidden md:flex md:justify-center items-center border-r-2 md:border-l-2 border-white"
          >
            <p className="text-white text-2xl text-center hover:scale-110 hover:underline transition-transform duration-300 ease-in-out">
              Return
            </p>
          </Link>
        </div>
      </div>
      <div className="">
        <h1 className="p-2 hidden text-2xl md:text-5xl font-bold border-white  text-center md:text-start md:px-4">
          {post.metadata.title}
        </h1>
        <div className="border-b-2 border-white h-10 grid grid-cols-10 ">
          <div className="col-span-2 border-r-2  border-white md:col-span-4 diagonal-stripes"></div>
          <div className="flex justify-center items-center col-span-6   md:col-span-2 ">
            <div className="text-xl opacity-50 ">[ {post.metadata.date} ]</div>
          </div>
          <div className="col-span-2 border-l-2  border-white md:col-span-4 diagonal-stripes"></div>
        </div>
        <div className="w-[100%] md:flex md:flex-col md:justify-start  md:items-center ">
          <div
            className="prose prose-sm md:prose-lg md:max-w-[120rem] md:mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </main>
  );
}
