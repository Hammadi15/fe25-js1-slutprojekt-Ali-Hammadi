import { apiFetch, popularUrl, topRatedUrl, searchUrl } from "./api.js";
import { showMovies, showPeople } from "./ui.js";

// Buttons
const popularBtn = document.querySelector("#popularBtn");
const ratedBtn = document.querySelector("#ratedBtn");
const searchBtn = document.querySelector("#searchBtn");

// Search elements
const searchInput = document.querySelector("#searchInput");
const searchType = document.querySelector("#searchType");
const searchForm = document.querySelector("#searchForm");

// Container for all results

const moviesContainer = document.querySelector("#moviesContainer");

// Load top popular movies
popularBtn.addEventListener("click", () => {
  apiFetch(popularUrl)
    .then(showMovies)
    .catch((error) => console.error("Error fetching topRated", error));
});

// Load top rated movies
ratedBtn.addEventListener("click", () => {
  apiFetch(topRatedUrl)
    .then(showMovies)
    .catch((error) => console.error("Error fetching topRated", error));
});

// Handle search (movies or people)
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  const type = searchType.value;

  apiFetch(searchUrl(type, query)).then((results) => {
    // Server or network error
    if (!results) {
      moviesContainer.innerHTML =
        "<p>Something went wrong. Please try again later </p>";
      return;
    }

    // No search results found
    if (results.length === 0) {
      moviesContainer.innerHTML = "<p>No results found.</p>";
      return;
    }

    // Render results based on selected search type
    if (type === "movie") {
      showMovies(results, true);
    } else {
      showPeople(results);
    }
  });
});
