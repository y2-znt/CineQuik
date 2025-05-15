const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchCarouselMovies = async () => {
  try {
    const genresResponse = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
    ).then((res) => res.json());
    const genresList = genresResponse.genres;

    const [moviesResponse] = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    ).then((res) => res.json());

    const movies = moviesResponse.results;

    return movies.map((movie) => ({
      ...movie,
      genres: movie.genre_ids.map(
        (genreId) =>
          genresList.find((genre) => genre.id === genreId) || {
            id: genreId,
            name: "Uncategorized",
          }
      ),
    }));
  } catch (error) {
    console.error("Error fetching carousel movies:", error);
    return [];
  }
};

export const fetchDetailsMovies = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching details for movie ID ${id}:`, error);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchSearchMovies = async (query) => {
  if (query.length <= 1) return [];
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error searching movies with query "${query}":`, error);
    return [];
  }
};

export const fetchRecommendedMovies = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(
      `Error fetching recommended movies for movie ID ${id}:`,
      error
    );
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    return [];
  }
};

export const fetchVideosMovies = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching videos for movie ID ${id}:`, error);
    return [];
  }
};

export const fetchWatchProvidersMovies = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching watch providers for movie ID ${id}:`, error);
    return [];
  }
};
