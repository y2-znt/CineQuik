import { useQuery } from "@tanstack/react-query";
import "../CSS/movieList.css";
import { fetchTopRatedMovies } from "../api/moviesApi";
import Card from "./Card";
import Skeleton from "./Skeleton";

const TopRatedMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  return (
    <div className="media__list">
      <h2 className="list__title">Top rated</h2>
      <div className="list__cards">
        {error && <div>Error fetching top rated movies: {error.message}</div>}
        {isLoading && 
          Array(10).fill(0).map((_, index) => (
            <div key={`skeleton-${index}`}>
              <Skeleton />
            </div>
          ))
        }
        {!isLoading && data && data.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
