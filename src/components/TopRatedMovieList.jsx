import { useQuery } from "@tanstack/react-query";
import "../CSS/movieList.css";
import { fetchTopRatedMovies } from "../api/moviesApi";
import Card from "./Card";
import { ErrorMovieList, SkeletonMovieList } from "./skeletons/SkeletonMovieList";

const TopRatedMovieList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  if (isLoading) return <SkeletonMovieList title="Top Rated" />;
  if (error) return <ErrorMovieList message={error.message} title="Top Rated" />;

  return (
    <div className="media__list">
      <h2 className="list__title">Top Rated</h2>
      <div className="list__cards">
        {data && data.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
