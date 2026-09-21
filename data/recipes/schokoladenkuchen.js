const schokoladenkuchen = {
  slug: "schokoladenkuchen",
  title: "Saftiger Schokoladenkuchen",
  category: "Kuchen",
  image: "/images/schokoladenkuchen.jpg",
  description: "Beschreibung des Schokoladenkuchens.",
  portions: 12,
  portionLabel: "Stück",
  details: [
    { label: "Backform", value: "Kastenform 25 cm" },
    { label: "Temperatur", value: "175 °C Ober-/Unterhitze" },
    { label: "Backzeit", value: "ca. 45–50 Minuten" },
  ],
  sections: [
    {
      id: "teig",
      title: "Schokoladenteig",
      ingredients: [
        { id: "mehl", name: "Mehl", amount: 250, unit: "g" },
        { id: "butter", name: "Butter", amount: 150, unit: "g" },
        { id: "zucker", name: "Zucker", amount: 160, unit: "g" },
        { id: "kakao", name: "Kakaopulver", amount: 40, unit: "g" },
        { id: "eier", name: "Eier", amount: 3, unit: "Stück" },
        { id: "milch", name: "Milch", amount: 120, unit: "ml" },
        { id: "backpulver", name: "Backpulver", amount: 1, unit: "TL" },
      ],
      steps: [
        {
          id: "teig-1",
          parts: [
            "Butter und Zucker cremig rühren. ",
            { type: "ingredient", id: "eier" },
            " Eier einzeln unterrühren.",
          ],
        },
        {
          id: "teig-2",
          parts: [
            "Mehl, Kakaopulver und Backpulver mischen und abwechselnd mit der Milch unter den Teig rühren.",
          ],
        },
        {
          id: "teig-3",
          parts: [
            "Den Teig in die vorbereitete Form geben und bei 175 °C etwa 45–50 Minuten backen.",
          ],
        },
      ],
    },
  ],
};

export default schokoladenkuchen;
