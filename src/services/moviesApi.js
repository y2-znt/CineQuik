const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchCarouselMovies = async () => {
  const genresResponse = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
  ).then((res) => res.json());
  const genresList = genresResponse.genres;

  const [moviesResponse, specificMovieResponse] = await Promise.all([
    fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then((res) =>
      res.json(),
    ),
    fetch(`${BASE_URL}/movie/569094?api_key=${API_KEY}`).then((res) =>
      res.json(),
    ),
  ]);

  const movies = moviesResponse.results;
  const specificMovie = specificMovieResponse;

  // Add the specific movie to the beginning of the array
  const allMovies = [
    {
      ...specificMovie,
      genre_ids: specificMovie.genres.map((genre) => genre.id),
    },
    ...movies,
  ];

  return allMovies.map((movie) => ({
    ...movie,
    genres: movie.genre_ids.map(
      (genreId) =>
        genresList.find((genre) => genre.id === genreId) || {
          id: genreId,
          name: "Uncategorized",
        },
    ),
  }));
};

export const fetchDetailsMovies = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.json();
};

export const fetchPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchSearchMovies = async (query) => {
  if (query.length <= 1) return [];
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  const data = await response.json();
  return data.results;
};

export const fetchRecommendedMovies = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const fetchVideosMovies = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};

export const fetchWatchProvidersMovies = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}/watch/providers?api_key=${API_KEY}`,
  );
  const data = await response.json();
  return data.results;
};
