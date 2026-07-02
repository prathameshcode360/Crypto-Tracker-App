import { fetchCoins } from "./api.js";
import { renderCoins } from "./ui.js";
import { searchCoins } from "./search.js";

let coins = [];
let filteredCoins = [];

const coinsPerPage = 15;
let currentPage = 1;

async function initializeApp() {
  coins = await fetchCoins();
  filteredCoins = coins;

  renderCurrentPage();
}

function renderCurrentPage() {
  const startIndex = (currentPage - 1) * coinsPerPage;
  const endIndex = startIndex + coinsPerPage;

  const currentCoins = filteredCoins.slice(startIndex, endIndex);

  renderCoins(currentCoins);
  renderPagination();
}

function renderPagination() {
  const pagination = document.getElementById("pagination");

  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");

    button.textContent = i;

    if (i === currentPage) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      currentPage = i;
      renderCurrentPage();
    });

    pagination.appendChild(button);
  }
}

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    filteredCoins = searchCoins(coins, event.target.value);

    currentPage = 1;

    renderCurrentPage();
  });
}

initializeApp();
