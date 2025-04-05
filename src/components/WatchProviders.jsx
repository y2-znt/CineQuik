import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchWatchProvidersMovies } from "../api/moviesApi";
import "../CSS/details.css";
import FadeUpOnScroll from "./animations/FadeUpOnScroll";

export default function WatchProviders() {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["watchProviders", id],
    queryFn: () => fetchWatchProvidersMovies(id),
  });

  const watchProviders = data?.FR;

  if (!watchProviders) return null;

  return (
    <>
      <div style={{ marginTop: "100px" }}></div>
      <div className="movie__watch-providers">
        <FadeUpOnScroll delay={0.2}>
          <div className="movie__heading">Where to Watch</div>
          <div className="watch-providers__container">
            {watchProviders.flatrate && (
              <div className="watch-providers__section">
                <h3 className="watch-providers__title">
                  <i className="fas fa-stream"></i> Streaming
                </h3>
                <div className="watch-providers__list">
                  {watchProviders.flatrate.map((provider) => (
                    <div key={provider.provider_id} className="provider-card">
                      <img
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        alt={provider.provider_name}
                        className="provider-logo"
                      />
                      <span className="provider-name">
                        {provider.provider_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {watchProviders.rent && (
              <div className="watch-providers__section">
                <h3 className="watch-providers__title">
                  <i className="fas fa-shopping-cart"></i> Available for Rent
                </h3>
                <div className="watch-providers__list">
                  {watchProviders.rent.map((provider) => (
                    <div key={provider.provider_id} className="provider-card">
                      <img
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        alt={provider.provider_name}
                        className="provider-logo"
                      />
                      <span className="provider-name">
                        {provider.provider_name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeUpOnScroll>
      </div>
    </>
  );
}
