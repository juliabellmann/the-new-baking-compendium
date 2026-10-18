import apfelstrudel from "./apfelstrudel";
import kaesekuchen from "./kaesekuchen";
import schokoladenkuchen from "./schokoladenkuchen";
import schokomuffins from "./schokomuffins";
import zwetschgenkuchen from "./zwetschgenkuchen";

export const recipes = [schokomuffins, apfelstrudel, zwetschgenkuchen, kaesekuchen, schokoladenkuchen];

export function getRecipeBySlug(slug) {
  return recipes.find((recipe) => recipe.slug === slug);
}
