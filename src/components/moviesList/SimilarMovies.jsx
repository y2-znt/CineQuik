import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSimilarMovies } from "../../api/moviesApi";
import MovieList from "./MovieList";

export default function SimilarMovies() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["similarMovies", id],
    queryFn: () => fetchSimilarMovies(id),
    enabled: !!id,
  });

  return (
    <MovieList
      title="Similar Movies"
      subtitle="Movies you might enjoy if you liked this one"
      data={data}
      error={error}
      isLoading={isLoading}
      showViewAll={false}
      useScrollAnimation={true}
      footer={
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "var(--font-size-sm)",
          }}
        >
          These recommendations are based on genre, cast, and themes
        </p>
      }
    />
  );
}
