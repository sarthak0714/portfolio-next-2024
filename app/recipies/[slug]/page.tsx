import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllRecipeSlugs, getRecipeBySlug } from "../../../lib/recipe";

export function generateStaticParams() {
  return getAllRecipeSlugs().map((slug) => ({ slug }));
}

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = await getRecipeBySlug(params.slug);
  if (!recipe) notFound();

  const recipeImage =
    params.slug === "ghee-roast" ? "/gheeroast.jpeg" : "/cheesecake.jpeg";
  const contentWithImage = recipe.content.replace(
    /(<h1\b[^>]*>[\s\S]*?<\/h1>)/i,
    `$1<div class="recipe-image"><img src="${recipeImage}" alt="${recipe.metadata.title}" /></div>`
  );

  return (
    <main className="border-2 border-white m-2">
      <div className="grid md:grid-cols-6">
        <div className="border-b-2 border-white h-14 grid grid-cols-12 md:col-span-5">
          <Link href="/recipies" className="border-r-2 border-white col-span-2 md:col-span-1 flex justify-center items-center"><p className="text-lg md:text-3xl">0714</p></Link>
          <div className="col-span-10 flex items-center pl-2"><p className="text-xl md:text-3xl">Recipies.</p></div>
        </div>
        <div className="border-b-2 border-white hidden md:grid h-14"><Link href="/recipies" className="md:flex justify-center items-center border-r-2 md:border-l-2 border-white"><p className="text-2xl hover:underline">Return</p></Link></div>
      </div>
      <div className="border-b-2 border-white h-10 grid grid-cols-10"><div className="col-span-2 md:col-span-4 diagonal-stripes" /><div className="col-span-6 md:col-span-2 flex justify-center items-center opacity-50">[ {recipe.metadata.date} ]</div><div className="col-span-2 md:col-span-4 diagonal-stripes" /></div>
      <div className="prose prose-sm md:prose-lg md:max-w-[80rem] md:mx-auto" dangerouslySetInnerHTML={{ __html: contentWithImage }} />
    </main>
  );
}
