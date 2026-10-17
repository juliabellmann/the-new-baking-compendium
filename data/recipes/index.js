import apfelstrudel from "./apfelstrudel";
import kaesekuchen from "./kaesekuchen";
import schokoladenkuchen from "./schokoladenkuchen";
import schokomuffins from "./schokomuffins";

export const recipes = [kaesekuchen, schokoladenkuchen, schokomuffins, apfelstrudel];

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug);
}
