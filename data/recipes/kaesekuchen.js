const kaesekuchen = {
  slug: "kaesekuchen",
  title: "Cremiger Käsekuchen",
  category: "Kuchen",
  image: "/images/placeholder.jpg",
  description:
    "Cremiger Käsekuchen mit einem knusprigen Boden. Das Rezept zeigt beispielhaft, wie mehrere Rezeptteile und skalierbare Mengen aufgebaut werden.",
  portions: 12,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Springform 26 cm" },
    { label: "Temperatur", value: "180 °C Ober-/Unterhitze" },
    { label: "Gesamtzeit", value: "ca. 1 Std. 55 Minuten" },
    { label: "Backzeit", value: "ca. 55–65 Minuten" },
  ],
  sections: [
    {
      id: "einkaufsliste",
      title: "Gesamt benötigte Mengen",
      ingredients: [
        { id: "mehl", name: "Mehl", amount: 300, unit: "g" },
        { id: "butter", name: "weiche Butter", amount: 200, unit: "g" },
        { id: "zucker", name: "Zucker", amount: 120, unit: "g" },
        { id: "vanillinzucker", name: "Vanillinzucker", amount: 1, unit: "Päckchen"},
        { id: "salz", name: "Salz", amount: 1, unit: "Prise" },
      ],
      steps: [

      ],
    },
    {
      id: "teig",
      title: "Mürbeteig",
      ingredients: [
        { id: "mehl", name: "Mehl", amount: 300, unit: "g" },
        { id: "butter", name: "weiche Butter", amount: 200, unit: "g" },
        { id: "zucker", name: "Zucker", amount: 120, unit: "g" },
        { id: "vanillinzucker", name: "Vanillinzucker", amount: 1, unit: "Päckchen"},
        { id: "salz", name: "Salz", amount: 1, unit: "Prise" },
      ],
      steps: [
        {
          id: "teig-1",
          parts: [" Den Backofen vorheizen auf 200 Grad für Ober-/Unterhitze oder 180 Grad für Umluft vorheizen."],
        },

        {
          id: "teig-2",
          parts: [
            "Die trockenen Zutaten ",
            { type: "ingredient", id: "mehl" },
            " Mehl, ",
            { type: "ingredient", id: "zucker" },
            " Zucker und ",
            { type: "ingredient", id: "vanillinzucker" },
            " Vanillinzucker sowie ",
            { type: "ingredient", id: "salz" },
            " Salz in eine Schüssel geben und mischen. ",
          ],
        },
        
        {
          id: "teig-3",
          parts: [
            
            { type: "ingredient", id: "butter" },
            " Butter hinzugeben und alles zu einem glatten Teig verkneten.",
          ],
        },

        {
          id: "teig-4",
          parts: [
            "Mit dem Teig die Springform auskleiden und anschließend mit einer Gabel mehrfach einpiecksen. ",
            "Hinweis: Für einen Käsekuchen ohne Mürbeteig-Rand braucht man nur die Hälfte der Menge der Mürbeteigmasse.",
          ],
        },

        {
          id: "teig-5",
          parts: [
            "Den Boden für 12-14 Minuten backen.",
          ],
        },
      ],
    },
    {
      id: "kaesecreme",
      title: "Käsecreme",
      ingredients: [
        { id: "quark", name: "Magerquark", amount: 1000, unit: "g" },
        { id: "milch", name: "Milch", amount: 600, unit: "ml" },
        { id: "vanillepudding", name: "Vanillepudding", amount: 2, unit: "Päckchen" },
        { id: "zucker-creme", name: "Zucker", amount: 200, unit: "g" },
        { id: "eier-creme", name: "Eier", amount: 2, unit: "Stück" },
        { id: "vanilleschote", name: "Vanilleschote", amount: 1, unit: "Stück"},
        { id: "zitrone", name: "Zitronenabrieb", amount: 2, unit: "TL" },
        { id: "oel", name: "neutrales Speiseöl", amount: 200, unit: "ml" },
      ],
      steps: [
        {
          id: "creme-1",
          parts: [
            "Quark und Frischkäse mit ",
            { type: "ingredient", id: "zucker-creme" },
            " Zucker glatt rühren. ",
            { type: "ingredient", id: "eier-creme" },
            " Eier nach und nach unterrühren.",
          ],
        },
        {
          id: "creme-2",
          parts: ["Milch mit dem Puddingpulver glatt verrühren und unter die Quarkmasse mischen. Anschließend Zitronensaft unterrühren."],
        },
        {
          id: "creme-3",
          parts: ["Die Käsecreme auf den vorbereiteten Boden geben und bei 180 °C Ober-/Unterhitze etwa 55–65 Minuten backen."],
        },
      ],
    },
  ],
};

export default kaesekuchen;
