export function formatAmount(amount) {
  if (amount === null || amount === undefined || Number.isNaN(amount)) {
    return "";
  }

  const rounded = Math.round(amount * 100) / 100;

  if (Number.isInteger(rounded)) {
    return String(rounded);
  }

  return String(rounded).replace(".", ",");
}

export function formatUnit(unit, amount) {
  if (!unit) return "";

  if (unit === "Stück" && amount === 1) return "Stück";
  if (unit === "Ei" && amount !== 1) return "Eier";

  return unit;
}
