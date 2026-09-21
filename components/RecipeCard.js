import Link from "next/link";

export default function RecipeCard({ recipe }) {
  return (
    <Link className="recipe-card" href={`/rezepte/${recipe.slug}`}>
      <div className="recipe-card-image" aria-hidden="true">
        {recipe.image ? (
          <img src={recipe.image} alt={recipe.title} />
        ) : (
          <span role="img" aria-label="Kuchen">
            🍰
          </span>
        )}
      </div>
      <div className="recipe-card-body">
        <div className="card-meta">
          <span>{recipe.category}</span>
          <span>{recipe.sections.length} Bereiche</span>
        </div>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <span className="card-link">Rezept ansehen →</span>
      </div>
    </Link>
  );
}
