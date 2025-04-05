import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchCarouselMovies = async () => {
  const genresResponse = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  const genresList = genresResponse.data.genres;

  const moviesResponse = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  const movies = moviesResponse.data.results;

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
};

export const fetchDetailsMovies = async (id) => {
  return await axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((res) => res.data);
};

export const fetchPopularMovies = async () => {
  return await axios
    .get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export const fetchSearchMovies = async (query) => {
  if (query.length <= 1) return [];
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchRecommendedMovies = async (id) => {
  return await axios
    .get(`${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export const fetchTopRatedMovies = async () => {
  return await axios
    .get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};

export const fetchVideosMovies = async (id) => {
  return await axios
    .get(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`)
    .then((res) => res.data.results);
};
