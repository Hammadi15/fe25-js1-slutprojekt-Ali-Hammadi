export function showMovies(movies) {
  movies = movies.slice(0, 10);

  const container = document.querySelector("#moviesContainer");
  container.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    console.log("Movie #" + (i + 1));
    console.log("Title:", movie.title);
    console.log("Release date:", movie.release_date);
    console.log("Poster:", movie.poster_path);
    console.log("----------------------");

    const card = document.createElement("div");
    card.className = "movieCard";

    card.innerHTML = `<img src="https://image.tmdb.org/t/p/w200${
      movie.poster_path
    }" />
 <p> Title: ${movie.title}</p>
 <p> Year: ${movie.release_date?.slice(0, 4)}</p>`;
    container.append(card);
    // const img = document.createElement("img");
    // img.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
    // img.alt = movie.title;
    // document.body.append(img);
  }
}
