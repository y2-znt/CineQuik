import { useParams } from "react-router-dom";
import { useRecommendedMovies } from "../../../hooks/useMovie";
import MovieList from "../MovieList";

export default function RecommendedMovies() {
  const { id } = useParams();

  const { data, error, isLoading } = useRecommendedMovies(id);

  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <MovieList
        title="Recommended Movies"
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
    </>
  );
}
