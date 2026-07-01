const STORAGE_KEY = "likedCoins";

export function getLikedCoins() {
  const likedCoins = localStorage.getItem(STORAGE_KEY);

  return likedCoins ? JSON.parse(likedCoins) : [];
}

export function saveLikedCoins(likedCoins) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(likedCoins));
}

export function addLikedCoin(coin) {
  const likedCoins = getLikedCoins();

  const alreadyLiked = likedCoins.some((likedCoin) => likedCoin.id === coin.id);

  if (!alreadyLiked) {
    likedCoins.push(coin);
    saveLikedCoins(likedCoins);
  }
}

export function removeLikedCoin(coinId) {
  const likedCoins = getLikedCoins();

  const updatedLikedCoins = likedCoins.filter((coin) => coin.id !== coinId);

  saveLikedCoins(updatedLikedCoins);
}
