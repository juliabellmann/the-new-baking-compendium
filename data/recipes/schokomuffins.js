const schokomuffins = {
  slug: "schokomuffins",
  title: "Saftige Schoko-Muffins",
  category: "Muffins",
  image: "/images/schokomuffins.jpg",
  description: "Sehr schokoladige und fluffige Schoko-Muffins mit echter Zartbitterschokolade oder Schokodrops.",
  portions: 12,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Muffinblech" },
    { label: "Temperatur", value: "180 °C Ober-/Unterhitze" },
    { label: "Gesamtzeit", value: "ca. 45 Minuten" },
    { label: "Backzeit", value: "ca. 25 Minuten" },
  ],
  sections: [
    {
      id: "teig",
      title: "Teig der Schokomuffins",
      ingredients: [
        { id: "butter", name: "Butter", amount: 125, unit: "g" },
        { id: "zucker", name: "Zucker", amount: 150, unit: "g" },
        { id: "eier", name: "Eier", amount: 2, unit: "Stück" },
        { id: "schoko", name: "Zartbitterschokolade", amount: 200, unit: "g" },
        { id: "mehl", name: "Mehl", amount: 200, unit: "g" },
        { id: "kakao", name: "Backkakao", amount: 4, unit: "EL" },
        { id: "backpulver", name: "Backpulver", amount: 2, unit: "TL" },
        { id: "milch", name: "Milch", amount: 175, unit: "ml" },
        { id: "salz", name: "Salz", amount: 1, unit: "Priese" },
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
            { type: "ingredient", id: "schoko" },
            " Zartbitterschokolade grob hacken.",
            "Alternativ könnte man auch Schokodrops oder ähnliches in gleicher Menge nehmen.",
          ],
        },
        {
          id: "teig-3",
          parts: [
            "In einer großen Schüssel ",
            { type: "ingredient", id: "butter" },
            " Butter und ",
            { type: "ingredient", id: "zucker" },
            " Zucker cremig rühren. ",
            { type: "ingredient", id: "eier" },
            " Eier unterrühren.",
          ],
        },
        {
          id: "teig-4",
          parts: [
            "Die trockenen Zutaten ",
            { type: "ingredient", id: "mehl" },
            " Mehl mit ",
            { type: "ingredient", id: "kakao" },
            " Kakaopulver, ",
            { type: "ingredient", id: "salz" },
            " Salz und ",
            { type: "ingredient", id: "backpulver" },
            " Backpulver vermischen. ",
          ],
        },
        {
          id: "teig-5",
          parts: [
            "Anschließend die Mehlmischung mit ",
            { type: "ingredient", id: "milch" },
            " Milch zur Butter-Zucker-Eier-Mischung geben und glattrühren.",
          ],
        },
        {
          id: "teig-6",
          parts: [
            "Etwa 2/3 der gehackten Schokolade unterheben. Die aufgehobene Schokolade kommt am Ende zur Dekoration auf die Muffins.",
          ],
        },
        {
          id: "teig-7",
          parts: [
            "Das Muffinblech mit Förmchen auslegen und den Teig auf diese verteilen. Anschließend die restliche Schokolade darauf verteilen.",
          ],
        },
        {
          id: "teig-8",
          parts: [
            "Im vorgeheizten Backofen für ca. 25 Minuten backen.",
          ],
        },

      ],
    },
  ],
};

export default schokomuffins;
