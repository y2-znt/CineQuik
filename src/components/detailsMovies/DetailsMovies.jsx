import { useParams } from "react-router-dom";
import "../../css/details.css";
import { useMovieDetails } from "../../hooks/useMovie";
import RecommendedMovies from "../moviesList/components/RecommendedMovies";
import SkeletonDetailsMovies, {
  ErrorDetailsMovies,
} from "../skeletons/SkeletonDetailsMovies";
import MovieHeader from "./components/MovieHeader";
import ProductionCompanies from "./components/ProductionCompanies";
import VideosMovies from "./components/VideosMovies";
import WatchProviders from "./components/WatchProviders";

export default function DetailsMovies() {
  const { id } = useParams();
  const { data, isLoading, error } = useMovieDetails(id);

  if (isLoading) return <SkeletonDetailsMovies />;
  if (error) return <ErrorDetailsMovies message={error.message} />;

  return (
    <div className="movie">
      <MovieHeader movie={data} />
      <VideosMovies />
      <div className="movie__recommended-section">
        <RecommendedMovies />
      </div>
      <div style={{ marginTop: "100px" }}></div>
      <ProductionCompanies companies={data.production_companies} />
      <WatchProviders />
    </div>
  );
}
