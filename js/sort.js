export function sortCoins(coins, property, order = "asc") {
  const sortedCoins = [...coins];

  sortedCoins.sort((a, b) => {
    if (order === "asc") {
      return a[property] - b[property];
    }

    return b[property] - a[property];
  });

  return sortedCoins;
}
