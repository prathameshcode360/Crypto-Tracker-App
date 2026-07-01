export function formatCurrency(value) {
  return `$${value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function formatLargeNumber(value) {
  if (value >= 1_000_000_000_000) {
    return (value / 1_000_000_000_000).toFixed(2) + "T";
  }

  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(2) + "B";
  }

  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(2) + "M";
  }

  if (value >= 1_000) {
    return (value / 1_000).toFixed(2) + "K";
  }

  return value.toLocaleString();
}

export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
