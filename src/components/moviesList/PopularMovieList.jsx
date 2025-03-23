import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import FadeOnScroll from "../animations/FadeOnScroll";
import Card from "../Card";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const PopularMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Popular Movies" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Popular Movies" />;

  return (
    <div className="movie__list">
      <FadeOnScroll>
        <h2 className="list__title">Popular Movies</h2>
      </FadeOnScroll>
      <div className="list__cards">
        {data &&
          data.map((movie, index) => (
            <FadeOnScroll key={movie.id} delay={index * 0.1}>
              <Card movie={movie} />
            </FadeOnScroll>
          ))}
      </div>
    </div>
  );
};

export default PopularMovieList;
