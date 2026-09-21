"use client";

import { useState } from "react";

export default function PortionSelector({ initialPortions, onChange, label = "Portionen" }) {
  const [portions, setPortions] = useState(initialPortions);

  function update(nextValue) {
    const next = Math.max(1, Number(nextValue) || 1);
    setPortions(next);
    onChange(next);
  }

  return (
    <div className="portion-selector" aria-label={label}>
      <span className="portion-label">{label}</span>
      <div className="portion-controls">
        <button type="button" onClick={() => update(portions - 1)} aria-label="Portionen verringern">
          −
        </button>
        <input
          type="number"
          min="1"
          step="1"
          value={portions}
          onChange={(event) => update(event.target.value)}
          aria-label="Anzahl der Portionen"
        />
        <button type="button" onClick={() => update(portions + 1)} aria-label="Portionen erhöhen">
          +
        </button>
      </div>
    </div>
  );
}
