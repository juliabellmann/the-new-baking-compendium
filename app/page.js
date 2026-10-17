import Link from "next/link";
import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";
import RecipeFilters from "@/components/RecipeFilters";

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="hero">
        <div className="hero-inner">
          <p className="eyebrow">Meine Rezeptsammlung</p>
          <h1>Das Back Kompendium</h1>
          <p className="hero-text">
            Diese Seite ist dafür da, dass alle guten Rezepte übersichtlich
            zusammengestellt sind. Die Mengen sind anpassbar.
          </p>
        </div>
      </header>

      <section className="content-section">

        {/* <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div> */}

         <RecipeFilters recipes={recipes} />
         
      </section>
    </main>
  );
}
