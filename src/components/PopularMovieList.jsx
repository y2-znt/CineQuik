import { useQuery } from "@tanstack/react-query";
import "../CSS/movieList.css";
import { fetchPopularMovies } from "../api/moviesApi";
import Card from "./Card";

const PopularMovieList = () => {
  const { data, error } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  return (
    <div className="movie__list">
      <h2 className="list__title">Popular Movies</h2>
      <div className="list__cards">
        {error && <div>Error fetching popular movies: {error.message}</div>}
        {data && data.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default PopularMovieList;
