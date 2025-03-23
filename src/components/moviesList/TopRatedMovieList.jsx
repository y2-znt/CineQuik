import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedMovies } from "../../api/moviesApi";
import "../../CSS/movieList.css";
import Card from "../Card";
import FadeOnScroll from "../animations/FadeOnScroll";
import {
  ErrorMovieList,
  SkeletonMovieList,
} from "../skeletons/SkeletonMovieList";

const TopRatedMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Top Rated" />;
  if (error)
    return <ErrorMovieList message={error.message} title="Top Rated" />;

  return (
    <div className="media__list">
      <FadeOnScroll>
        <h2 className="list__title">Top Rated</h2>
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

export default TopRatedMovieList;
