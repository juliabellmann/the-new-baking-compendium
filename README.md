# Baking Compendium

Eine Next.js-App mit App Router, JavaScript und ohne Datenbank. Rezepte werden als JavaScript-Dateien gepflegt.

## Voraussetzungen

- Node.js 20.9 oder neuer empfohlen
- VS Code

## Start

Im Projektordner:

```bash
npm install
npm run dev
```

Danach im Browser öffnen:

http://localhost:3000

## Neue Rezepte hinzufügen

1. Eine neue Datei in `data/recipes/` anlegen, z. B. `apfelkuchen.js`.
2. Dort ein Rezeptobjekt im gleichen Aufbau wie die vorhandenen Rezepte erstellen.
3. Das Rezept in `data/recipes/index.js` importieren und in `recipes` aufnehmen.
4. `npm run dev` aktualisiert die App automatisch.

## Rezeptstruktur

Jedes Rezept kann beliebig viele `sections` haben. Ein Abschnitt kann z. B. `Teig`, `Käsecreme`, `Füllung`, `Streusel`, `Topping` usw. heißen.

Mengen, die innerhalb der Zubereitung mit der Portionenzahl mitskalieren sollen, werden als Ingredient-Referenz geschrieben:

```js
{
  parts: [
    "Butter mit ",
    { type: "ingredient", id: "zucker" },
    " Zucker verrühren."
  ]
}
```

Die ID muss zu einer Zutat im jeweiligen Rezept passen. Die Menge wird dadurch nur einmal gepflegt und automatisch in Zutatenliste und Zubereitung verwendet.

## Wichtig bei Zubereitungstexten

Normale Zahlen im Text werden nicht skaliert. Dadurch bleiben z. B. `180 °C` und `55–65 Minuten` unverändert. Nur explizit als `ingredient` referenzierte Mengen werden angepasst.

## Projektstruktur

```text
app/
  page.js
  layout.js
  globals.css
  rezepte/[slug]/page.js
components/
  RecipeCard.js
  RecipeView.js
  PortionSelector.js
  IngredientsList.js
  PreparationSteps.js
  StepText.js
data/
  recipes/
    index.js
    kaesekuchen.js
    schokoladenkuchen.js
lib/
  recipeUtils.js
public/images/
```
