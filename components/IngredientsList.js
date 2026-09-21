import { formatAmount, formatUnit } from "@/lib/recipeUtils";

export default function IngredientsList({ ingredients, factor }) {
  return (
    <ul className="ingredients-list">
      {ingredients.map((ingredient) => {
        const amount = ingredient.amount == null ? null : ingredient.amount * factor;

        return (
          <li key={ingredient.id}>
            <span className="ingredient-name">{ingredient.name}</span>
            <span className="ingredient-amount">
              {formatAmount(amount)} {formatUnit(ingredient.unit, amount)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
