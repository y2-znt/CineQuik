import axios from "axios";

export const fetchSearchMovies = async (query) => {
  if (query.length <= 1) return [];
  const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${query}`;
  const response = await axios.get(url);
  return response.data.results;
};
