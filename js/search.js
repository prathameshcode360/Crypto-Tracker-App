export function searchCoins(coins, searchTerm) {
  return coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}
