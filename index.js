console.log("hej");
const API_KEY = "f8cc29a8be18819210168095651f31f5";
const url = `https://api.themoviedb.org/3/movie/100?api_key=${API_KEY}`;
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

function showMovies(movies) {
  movies = movies.slice(0, 10);
  for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];
    console.log("Movie #" + (i + 1));
    console.log("Title:", movie.title);
    console.log("Release date:", movie.release_date);
    console.log("Poster:", movie.poster_path);
    console.log("----------------------");

    const img = document.createElement("img")
  img.src = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
    document.body.append(img)
  }
}
apiFetch(popularUrl).then(showMovies);
