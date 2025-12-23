import { apiFetch, popularUrl, topRatedUrl, searchUrl } from "./api.js";
import { showMovies, showPeople } from "./ui.js";

const popularBtn = document.querySelector("#popularBtn");
const ratedBtn = document.querySelector("#ratedBtn");
const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#searchInput");
const searchType = document.querySelector("#searchType");
const moviesContainer = document.querySelector("#moviesContainer");

popularBtn.addEventListener("click", () => {
  apiFetch(popularUrl)
    .then(showMovies)
    .catch((error) => console.error("Error fetching topRated", error));
});

ratedBtn.addEventListener("click", () => {
  apiFetch(topRatedUrl)
    .then(showMovies)
    .catch((error) => console.error("Error fetching topRated", error));
});

const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  const type = searchType.value;

  apiFetch(searchUrl(type, query)).then((results) => {
    if (!results) {
      moviesContainer.innerHTML = "<p>Something went wrong. Please try again later </p>";
      return;
    }

    if (results.length === 0) {
      moviesContainer.innerHTML = "<p>No results found.</p>";
      return;
    }

    if (type === "movie") {
      showMovies(results,true);
    } else {
      showPeople(results);
    }
  });
});
