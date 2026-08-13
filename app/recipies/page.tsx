import Link from "next/link";
import RecipeList from "../../components/RecipeList";
import { getRecipeData } from "../../lib/recipe";

export default function RecipiesPage() {
  return (
    <main className="border-2 border-white m-2 min-h-svh">
      <div className="grid md:grid-cols-6">
        <div className="border-b-2 border-white h-14 grid grid-cols-12 md:col-span-5">
          <Link href="/" className="border-r-2 border-white h-full col-span-2 md:col-span-1 flex justify-center items-center"><p className="text-lg md:text-3xl">0714</p></Link>
          <div className="col-span-10 flex items-center pl-2"><p className="text-xl md:pl-2 md:text-3xl">Recipies.</p></div>
        </div>
        <div className="border-b-2 border-white hidden md:grid h-14"><Link href="/" className="md:flex justify-center items-center border-r-2 md:border-l-2 border-white"><p className="text-2xl hover:underline">Return</p></Link></div>
      </div>
      <RecipeList recipes={getRecipeData()} />
    </main>
  );
}
