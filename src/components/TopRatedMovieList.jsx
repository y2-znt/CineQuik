import "../CSS/movieList.css";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { fetchTopRatedMovies } from "../api/fetchTopRatedMovies";

const TopRatedMovieList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: fetchTopRatedMovies,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching top rated movies: {error.message}</div>;

  return (
    <div className="media__list">
      <h2 className="list__title">Top rated</h2>
      <div className="list__cards">
        {data && data.map((movie) => <Card key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default TopRatedMovieList;
