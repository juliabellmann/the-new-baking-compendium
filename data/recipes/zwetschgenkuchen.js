const zwetschgenkuchen = {
  slug: "zwetschgenkuchen",
  title: "Zwetschgenkuchen mit frischem Hefeteig",
  category: "Kuchen",
  image: "/images/placeholder.jpg",
  description:
    "Zwetschen- bzw. Pflaumenkuchen mit Hefeteig und Streuseln, wie Oma ihn früher gemacht hat.",
  portions: 12,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Backblech" },
    { label: "Temperatur", value: "180 °C Ober-/Unterhitze" },
    { label: "Gesamtzeit", value: "ca. 1 Std. 20 Minuten" },
    { label: "Backzeit", value: "ca. 40 Minuten" },
  ],
  sections: [
    {
      id: "einkaufsliste",
      title: "Gesamt benötigte Mengen",
      ingredients: [
        { id: "gmehl", name: "Mehl", amount: 750, unit: "g" },
        { id: "gmilch", name: "Milch", amount: 125, unit: "ml" },
        { id: "geier", name: "Eier", amount: 2, unit: "Stück" },
        { id: "gbutter", name: "Butter", amount: 210, unit: "g" },
        { id: "gzucker", name: "Zucker", amount: 160, unit: "g" },
        { id: "ghefe", name: "Hefe", amount: 20, unit: "g" },
        { id: "gvanillinzucker", name: "Vanillinzucker", amount: 1, unit: "Päckchen"},
        { id: "gsalz", name: "Salz", amount: 1, unit: "Prise" },
        { id: "gzwetschgen", name: "Zwetschgen", amount: 1.5, unit: "kg" },
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
        { id: "hefe", name: "Hefe", amount: 20, unit: "g" },
        { id: "milch1", name: "Milch", amount: 50, unit: "ml" },
        { id: "milch2", name: "Milch", amount: 75, unit: "ml" },
        { id: "butter1", name: "weiche Butter", amount: 60, unit: "g" },
        { id: "zucker1", name: "Zucker", amount: 60, unit: "g" },
        { id: "eier", name: "Eier", amount: 2, unit: "Stück" },
        { id: "salz", name: "Salz", amount: 1, unit: "Prise" },
      ],
      steps: [
        {
          id: "teig-1",
          parts: [
            { type: "ingredient", id: "mehl1" },
            " Mehl in eine große Schüssel geben, in die Mitte eine Mulde drücken und die ",
            { type: "ingredient", id: "hefe" },
            " Hefe hineinbröseln. Ein wenig lauwarme Milch (",
            { type: "ingredient", id: "milch1" },
            ") soiwie ein TL Zucker hinzugeben und die Hefe in der Mulde durch rühren (z.B. mit einer Gabel) auflösen lassen. ",
          ],
        },
        
        {
          id: "teig-2",
          parts: [
            "Anschließend ",
            { type: "ingredient", id: "butter1" },
            " weiche Butter, ",
            { type: "ingredient", id: "eier" },
            " Eier, ",
            { type: "ingredient", id: "milch2" },
            " Milch, ",
            { type: "ingredient", id: "zucker1" },
            " Zucker sowie eine Priese Salz hinzugeben und zu einem glatten Teig kneten.",
          ],
        },
        {
          id: "teig-3",
          parts: [
            "Den Teig zugedeckt 60 Minuten an einem warmen Ort gehen lassen.",
          ],
        },
        {
          id: "teig-4",
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
        { id: "mehl2", name: "Mehl", amount: 250, unit: "g" },
        { id: "zucker2", name: "Zucker", amount: 100, unit: "g" },
        { id: "butter2", name: "Butter", amount: 150, unit: "g" },
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
            { type: "ingredient", id: "butter1" },
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
            "Im vorgeheizten Backofen für ca. 40 Minuten backen.",
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

export default zwetschgenkuchen;
