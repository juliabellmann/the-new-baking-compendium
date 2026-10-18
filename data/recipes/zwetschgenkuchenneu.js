const zwetschgenkuchenneu = {
  slug: "zwetschgenkuchenneu",
  title: "der gute Zwetschgenkuchen mit frischem Hefeteig",
  category: "Kuchen",
  image: "/images/zwetschgenkuchen.jpg",
  description:
    "Ein Backblech voll Zwetschen- bzw. Pflaumenkuchen mit Hefeteig und Streuseln, wie Oma ihn früher gemacht hat.",
  portions: 24,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Backblech" },
    { label: "Temperatur", value: "180 °C Ober-/Unterhitze" },
    { label: "Gesamtzeit", value: "ca. 2 Std." },
    { label: "Backzeit", value: "ca. 35 Minuten" },
  ],
  sections: [
    {
      id: "einkaufsliste",
      title: "Gesamt benötigte Mengen",
      ingredients: [
        { id: "gzwetschgen", name: "Zwetschgen", amount: 1.5, unit: "kg" },
        { id: "gmehl", name: "Mehl", amount: 650, unit: "g" },
        { id: "gmilch", name: "Milch", amount: 300, unit: "ml" },
        { id: "gbutter", name: "Butter", amount: 180, unit: "g" },
        { id: "gzucker", name: "Zucker", amount: 160, unit: "g" },
        { id: "ghefe", name: "frische Hefe", amount: 20, unit: "g" },
      ],
      steps: [
        {
          id: "einkaufsliste-1",
          parts: ["Dies sind die benötigten Gesamt-Mengen für den Kuchen."],
        },
      ],
    },
    {
      id: "teig",
      title: "Hefeteig",
      ingredients: [
        { id: "mehl1", name: "Mehl", amount: 500, unit: "g" },
        { id: "milch", name: "Milch", amount: 300, unit: "ml" },
        { id: "butter1", name: "weiche Butter", amount: 100, unit: "g" },
        { id: "zucker1", name: "Zucker", amount: 60, unit: "g" },
        { id: "hefe", name: "Hefe", amount: 20, unit: "g" },
        // { id: "eier", name: "Eier", amount: 2, unit: "Stück" },
        { id: "salz", name: "Salz", amount: 1, unit: "Prise" },
      ],
      steps: [
        {
          id: "teig-1",
          parts: [
            "Die trockenen Zutaten ",
            { type: "ingredient", id: "mehl1" },
            " Mehl und ",
            { type: "ingredient", id: "zucker1" },
            " Zucker in eine große Schüssel geben, in die Mitte eine Mulde drücken und ",
            { type: "ingredient", id: "hefe" },
            " Hefe hineinbröseln. ",
            { type: "ingredient", id: "milch" },
            " lauwarme Milch hinzugeben und die Hefe in der Mulde durch rühren (z.B. mit einer Gabel) auflösen lassen. ",
            { type: "ingredient", id: "butter1" },
            " weiche Butter hinzugeben und alles zu einem glatten Teig kneten.",
          ],
        },
        {
          id: "teig-2",
          parts: [
            "Den Teig zugedeckt 60 Minuten an einem warmen Ort gehen lassen.",
          ],
        },
        {
          id: "teig-3",
          parts: [
            "Anschließend den Teig auf dem Backblech ausrollen und mit den aufgeschnittenen und entkernten Zwetschgen belegen. Die Zwetschgen am besten mit der Innenseite nach oben und Flächendeckend auf dem Teig verteilen.",
          ],
        },
      ],
    },
    {
      id: "streusel",
      title: "Streusel",
      ingredients: [
        { id: "mehl2", name: "Mehl", amount: 150, unit: "g" },
        { id: "zucker2", name: "Zucker", amount: 80, unit: "g" },
        { id: "butter2", name: "Butter", amount: 80, unit: "g" },
      ],
      steps: [
        {
          id: "streusel-1",
          parts: [
            "Für die Streusel ",
            { type: "ingredient", id: "mehl2" },
            " Mehl, ",
            { type: "ingredient", id: "zucker2" },
            " Zucker und ",
            { type: "ingredient", id: "butter2" },
            " Butter in eine Schüssel geben. Am besten kann man die Streusel mit der Hand herstellen, man kann jedoch auch das Rührgerät nehmen.",
          ],
        },
        {
          id: "streusel-2",
          parts: [
            "Die Streusel über die Zwetschgen verteilen.",
          ],
        },
        {
          id: "streusel-3",
          parts: [
            "Im vorgeheizten Backofen für ca. 35 Minuten backen.",
          ],
        },
        {
          id: "streusel-4",
          parts: [
            "Hinweis: man kann die Zwetschgen auch durch Äpfel ersetzen.",
          ],
        },
      ],
    },
  ],
};

export default zwetschgenkuchenneu;
