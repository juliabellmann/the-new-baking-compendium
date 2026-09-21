import { formatAmount, formatUnit } from "@/lib/recipeUtils";

export default function StepText({ parts, ingredientsById, factor }) {
  return (
    <p>
      {parts.map((part, index) => {
        if (typeof part === "string") {
          return <span key={index}>{part}</span>;
        }

        if (part.type === "ingredient") {
          const ingredient = ingredientsById[part.id];
          if (!ingredient) return null;

          const amount = ingredient.amount == null ? null : ingredient.amount * factor;
          const amountText = amount == null ? "" : `${formatAmount(amount)} ${formatUnit(ingredient.unit, amount)}`.trim();

          return (
            <strong key={index} className="inline-ingredient" title={ingredient.name}>
              {amountText || ingredient.name}
            </strong>
          );
        }

        return null;
      })}
    </p>
  );
}
