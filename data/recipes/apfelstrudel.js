const apfelstrudel = {
  slug: "apfelstrudel",
  title: "Einfacher Apfelstrudel mit Blätterteig",
  category: "Kuchen",
  image: "/images/apfelstrudel.jpg",
  description: "Einfacher Apfelstrudel mit fertigem Blätterteig.",
  portions: 6,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Muffinblech" },
    { label: "Temperatur", value: "180 °C Ober-/Unterhitze" },
    { label: "Gesamtzeit", value: "ca. 55 Minuten" },
    { label: "Backzeit", value: "ca. 30 Minuten" },
  ],
  sections: [
    {
      id: "teig",
      title: "Blätterteig-Apfelstrudel",
      ingredients: [
        { id: "apfel", name: "Äpfel", amount: 1.2, unit: "kg" },
        { id: "zucker", name: "Zucker", amount: 50, unit: "g" },
        { id: "eier", name: "Eier", amount: 1, unit: "Stück" },
        { id: "rosinen", name: "Rosinen (optional)", amount: 60, unit: "g" },
        { id: "teig", name: "fertiger Blätterteig", amount: 1, unit: "Stück" },
      ],
      
      steps: [
        {
          id: "teig-1",
          parts: [
            "Den Ofen auf 180 Grad Ober-/Unterhitze bzw. 160 Grad Umluft vorheizen.",
          ],

        },
        {
          id: "teig-2",
          parts: [
            { type: "ingredient", id: "apfel" },
            " Äpfel schälen und klein würfeln.",
          ],
        },
        {
          id: "teig-3",
          parts: [
            "Anschließend die Apfelwürfel mit ",
            { type: "ingredient", id: "zucker" },
            " Zucker und ggf. ",
            { type: "ingredient", id: "rosinen" },
            " Rosinen vermischen. ",
          ],
        },
        {
          id: "teig-4",
          parts: [
            "Den Blätterteig abrollen und die Apfelmasse der Länge nach mittig auf den Teig verteilen. Die Ränder frei lasen. ",
          ],
        },

        {
          id: "teig-5",
          parts: [
            "Das ",
            { type: "ingredient", id: "eier" },
            " Ei verquirlen. Die Ränder des Teigs etwas mit verquirlten Ei bestreichen.",
          ],
        },
        {
          id: "teig-6",
          parts: [
            "Anschließend den Teig vorsichtig zusammen rollen und dabei einen gleich dicken Strang formen. Die Enden links und rechts etwas einklappen.",
          ],
        },
        {
          id: "teig-7",
          parts: [
            "Mit dem restlichen verquirlten Ei den fertigen Strang einstreichen. Anschließend in ca. 2 cm Abstand den Teig oben einschneiden.",
          ],
        },

        {
          id: "teig-8",
          parts: [
            "Im vorgeheizten Backofen für ca. 25 Minuten backen und gerne warm servieren.",
          ],
        },

      ],
    },
  ],
};

export default apfelstrudel;
