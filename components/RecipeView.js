"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PortionSelector from "@/components/PortionSelector";
import IngredientsList from "@/components/IngredientsList";
import PreparationSteps from "@/components/PreparationSteps";

export default function RecipeView({ recipe }) {
  const [portions, setPortions] = useState(recipe.portions);
  const factor = portions / recipe.portions;

  const ingredientsById = useMemo(() => {
    return Object.fromEntries(
      recipe.sections.flatMap((section) =>
        section.ingredients.map((ingredient) => [ingredient.id, ingredient]),
      ),
    );
  }, [recipe]);

  return (
    <main className="site-shell recipe-page">
      <div className="recipe-topbar">
        <Link className="back-link" href="/">
          ← Alle Rezepte
        </Link>
      </div>

      <header className="recipe-header">
        <div className="recipe-header-image" aria-hidden="true">
          {recipe.image ? (
            <img src={recipe.image} alt={recipe.title} />
          ) : (
            <span role="img" aria-label="Kuchen">
              🍰
            </span>
          )}
        </div>
        <div className="recipe-header-content">
          <p className="eyebrow">{recipe.category}</p>
          <h1>{recipe.title}</h1>
          <p className="recipe-description">{recipe.description}</p>
          {recipe.details?.length > 0 && (
            <div className="recipe-details">
              {recipe.details.map((detail) => (
                <div key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.value}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <PortionSelector
        initialPortions={recipe.portions}
        onChange={setPortions}
        label={recipe.portionLabel ?? "Portionen"}
      />

      <div className="recipe-sections">
        {recipe.sections.map((section) => (
          <section className="recipe-section" key={section.id}>
            <div className="section-title-row">
              <div>
                {/* <p className="eyebrow">Rezeptteil</p> */}
                <h2>{section.title}</h2>
              </div>
            </div>

            <div className="recipe-section-grid">
              <div className="ingredients-panel">
                <h3>Zutaten</h3>
                <IngredientsList
                  ingredients={section.ingredients}
                  factor={factor}
                />
              </div>

              <div className="preparation-panel">
                <h3>Zubereitung</h3>
                <PreparationSteps
                  steps={section.steps}
                  ingredientsById={ingredientsById}
                  factor={factor}
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
