import { apiFetch, popularUrl, topRatedUrl } from "./api.js";
import { showMovies } from "./ui.js";

const popularBtn = document.querySelector("#popularBtn");
const ratedBtn = document.querySelector("#ratedBtn");

popularBtn.addEventListener("click", () => {
  apiFetch(popularUrl).then(showMovies);
});

ratedBtn.addEventListener("click", () => {
  apiFetch(topRatedUrl).then(showMovies);
});