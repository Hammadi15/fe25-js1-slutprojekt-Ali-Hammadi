const API_KEY = "f8cc29a8be18819210168095651f31f5";
 const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
 const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
 async function apiFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

export {topRatedUrl, popularUrl, apiFetch};  