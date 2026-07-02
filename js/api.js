const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false";

export async function fetchCoins() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch cryptocurrency data.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}
