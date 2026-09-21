import { notFound } from "next/navigation";
import RecipeView from "@/components/RecipeView";
import { getRecipeBySlug, recipes } from "@/data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export default async function RecipePage({ params }) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return <RecipeView recipe={recipe} />;
}
