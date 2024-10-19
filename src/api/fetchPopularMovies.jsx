import axios from "axios";

export const fetchPopularMovies = async () => {
  return await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
    )
    .then((res) => res.data.results);
};
