import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js";

export function showMovies(movies, showDescription = false) {
  movies = movies.slice(0, 10);
  const container = document.querySelector("#moviesContainer");
  container.innerHTML = "";

  _.each(movies, (movie) => {
    const card = document.createElement("div");
    card.className = "movieCard";
    card.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" />
      <p><strong>Title:</strong> ${movie.title}</p>
      <p><strong>Year:</strong> ${movie.release_date}</p>
      ${
        showDescription
          ? `<p class="description">
         <strong>Description:</strong>
         ${movie.overview.slice(0, 150)}...
       </p>`
          : ""
      }
    `;

    container.append(card);
  });
}
export function showPeople(people) {
  const container = document.querySelector("#moviesContainer");
  container.innerHTML = "";

  people.slice(0, 10).forEach((person) => {
    const card = document.createElement("div");
    card.className = "movieCard";

    // Image
    const img = document.createElement("img");
    if (person.profile_path) {
      img.src = "https://image.tmdb.org/t/p/w200" + person.profile_path;
    }
    card.appendChild(img);

    // Name
    const name = document.createElement("p");
    name.innerHTML = `<strong>Name:</strong> ${person.name}`;
    card.appendChild(name);

    // Department
    const dept = document.createElement("p");
    dept.innerHTML = `<strong>Known for:</strong> ${person.known_for_department}`;
    card.appendChild(dept);

    // Known-for list (UL)
    const ulEl = document.createElement("ul");

    person.known_for.slice(0, 3).forEach((item) => {
      const liEl = document.createElement("li");
      liEl.textContent =
        (item.media_type === "movie" ? "Movie: " : "TV: ") +
        (item.title || item.name);
      ulEl.appendChild(liEl);
    });

    card.appendChild(ulEl);
    container.appendChild(card);
  });
}
