import { addLikedCoin } from "./storage.js";
import { formatCurrency, formatLargeNumber } from "./utils.js";

export function renderCoins(coins) {
  const tableBody = document.getElementById("coinsTableBody");

  tableBody.innerHTML = "";

  coins.forEach((coin) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${coin.market_cap_rank}</td>

      <td>
        <img
          src="${coin.image}"
          alt="${coin.name}"
          width="30"
          height="30"
        >
      </td>

      <td>${coin.name}</td>

      <td>${formatCurrency(coin.current_price)}</td>

      <td>${formatLargeNumber(coin.total_volume)}</td>

      <td>${formatLargeNumber(coin.market_cap)}</td>

      <td>
        <button class="favorite-btn">
          ⭐
        </button>
      </td>
    `;

    const favoriteButton = row.querySelector(".favorite-btn");

    favoriteButton.addEventListener("click", () => {
      addLikedCoin(coin);
      alert(`${coin.name} added to liked coins.`);
    });

    tableBody.appendChild(row);
  });
}
