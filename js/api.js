const API_KEY = "f8cc29a8be18819210168095651f31f5";

export const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

export const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

export function searchUrl(type, query) {
  return `https://api.themoviedb.org/3/search/${type}?api_key=${API_KEY}&query=${query}`;
}

export async function apiFetch(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    return null;
  }
}
