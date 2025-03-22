import { useQuery } from "@tanstack/react-query";
import "../CSS/movieList.css";
import { fetchPopularMovies } from "../api/moviesApi";
import Card from "./Card";
import { ErrorMovieList, SkeletonMovieList } from "./skeletons/SkeletonMovieList";

const PopularMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Popular Movies" />;
  if (error) return <ErrorMovieList message={error.message} title="Popular Movies" />;

  return (
    <div className="movie__list">
      <h2 className="list__title">Popular Movies</h2>
      <div className="list__cards">
        {data && data.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PopularMovieList;
