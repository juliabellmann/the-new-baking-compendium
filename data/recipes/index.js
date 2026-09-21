import kaesekuchen from "./kaesekuchen";
import schokoladenkuchen from "./schokoladenkuchen";

export const recipes = [kaesekuchen, schokoladenkuchen];

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug);
}
