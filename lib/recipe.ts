import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { Recipe } from "../types/recipe";

const recipesDirectory = path.join(process.cwd(), "public/recipies");

export function getRecipeData(): Recipe[] {
  const fileContents = fs.readFileSync(
    path.join(recipesDirectory, "recipe.json"),
    "utf-8"
  );
  return JSON.parse(fileContents);
}

export function getAllRecipeSlugs(): string[] {
  return getRecipeData().map((recipe) => recipe.slug);
}

export async function getRecipeBySlug(
  slug: string
): Promise<{ content: string; metadata: Recipe } | null> {
  const recipe = getRecipeData().find((item) => item.slug === slug);
  if (!recipe) return null;

  const fileContents = fs.readFileSync(
    path.join(recipesDirectory, recipe.contentFile),
    "utf-8"
  );
  const { content } = matter(fileContents);
  const processedContent = await remark().use(remarkGfm).use(html).process(content);

  return { content: processedContent.toString(), metadata: recipe };
}
