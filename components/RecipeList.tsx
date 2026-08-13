import Link from "next/link";
import { Recipe } from "../types/recipe";

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.slug}>
          <Link href={`/recipies/${recipe.slug}`} className="block">
            <div className="py-2 px-4">
              <h2 className="hover:underline text-justify text-lg md:text-2xl">
                &gt; {recipe.title} <span className="text-white opacity-50 underline text-sm md:text-lg">[{recipe.date}]</span>
              </h2>
            </div>
            <p className="px-4 md:px-8 pb-2 text-justify text-sm md:text-lg italic opacity-60">{recipe.excerpt}</p>
            <div className="border-y-2 border-white h-6 diagonal-stripes" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
