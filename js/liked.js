import { getLikedCoins, removeLikedCoin } from "./storage.js";
import { formatCurrency, formatLargeNumber } from "./utils.js";

function renderLikedCoins() {
  const likedCoins = getLikedCoins();
  const tableBody = document.getElementById("likedCoinsTableBody");

  tableBody.innerHTML = "";

  if (likedCoins.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7">No liked coins found.</td>
      </tr>
    `;
    return;
  }

  likedCoins.forEach((coin) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${coin.market_cap_rank}</td>

      <td>
        <img
          src="${coin.image}"
          alt="${coin.name}"
          width="30"
          height="30"
        />
      </td>

      <td>${coin.name}</td>

      <td>${formatCurrency(coin.current_price)}</td>

      <td>${formatLargeNumber(coin.total_volume)}</td>

      <td>${formatLargeNumber(coin.market_cap)}</td>

      <td>
        <button class="remove-btn" data-id="${coin.id}">
          Remove
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });

  const removeButtons = document.querySelectorAll(".remove-btn");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const coinId = button.dataset.id;

      removeLikedCoin(coinId);
      renderLikedCoins();
    });
  });
}

renderLikedCoins();
