import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js";

// Render a list of movies (used for Popular, Top Rated, and movie search)
export function showMovies(movies, showDescription = false) {
  movies = movies.slice(0, 10);
  const container = document.querySelector("#moviesContainer");
  container.innerHTML = "";

  _.each(movies, (movie) => {
    const card = document.createElement("div");
    card.className = "movieCard";

    card.innerHTML = `
      <img 
        src="https://image.tmdb.org/t/p/w200${movie.poster_path}" 
        alt="${movie.title}"
      />
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

// Render search results for people
export function showPeople(people) {
  const container = document.querySelector("#moviesContainer");
  container.innerHTML = "";

  people.slice(0, 10).forEach((person) => {
    const card = document.createElement("div");
    card.className = "movieCard";

    // Profile image
    const img = document.createElement("img");
    if (person.profile_path) {
      img.src = "https://image.tmdb.org/t/p/w200" + person.profile_path;
      img.alt = person.name;
    }
    card.appendChild(img);

    // Person name
    const name = document.createElement("p");
    name.innerHTML = `<strong>Name:</strong> ${person.name}`;
    card.appendChild(name);

    // Department (acting, directing, etc.)
    const dept = document.createElement("p");
    dept.innerHTML = `<strong>Known for:</strong> ${person.known_for_department}`;
    card.appendChild(dept);

    // List of known movies / TV shows
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
