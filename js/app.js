import { fetchCoins } from "./api.js";
import { renderCoins } from "./ui.js";
import { searchCoins } from "./search.js";

let coins = [];

async function initializeApp() {
  coins = await fetchCoins();
  renderCoins(coins);
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    const filteredCoins = searchCoins(coins, event.target.value);
    renderCoins(filteredCoins);
  });
}

initializeApp();
