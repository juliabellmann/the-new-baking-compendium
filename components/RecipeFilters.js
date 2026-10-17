
"use client";

import { useMemo, useState } from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeFilters({ recipes }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Alle");

  const categories = useMemo(() => {
    return [
      "Alle",
      ...new Set(
        recipes
          .map((recipe) => recipe.category)
          .filter(Boolean)
          .sort((a, b) => a.localeCompare(b, "de"))
      ),
    ];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    const query = search.trim().toLocaleLowerCase("de");

    return recipes.filter((recipe) => {
      const matchesCategory =
        selectedCategory === "Alle" ||
        recipe.category === selectedCategory;

      const searchableText = [
        recipe.title,
        recipe.description,
        recipe.category,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("de");

      return (
        matchesCategory &&
        searchableText.includes(query)
      );
    });
  }, [recipes, search, selectedCategory]);

  return (
    <section className="recipe-filters">
      <div className="filter-controls">
        <label className="search-field">
          <span className="sr-only">Rezepte suchen</span>
          <input
            type="search"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Rezept suchen ..."
          />
        </label>

        <label className="category-field">
          <span className="sr-only">Kategorie auswählen</span>
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="recipe-count" aria-live="polite">
        {filteredRecipes.length}{" "}
        {filteredRecipes.length === 1
          ? "Rezept"
          : "Rezepte"}
      </p>

      {filteredRecipes.length > 0 ? (
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.slug}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Keine passenden Rezepte gefunden.
        </p>
      )}
    </section>
  );
}
