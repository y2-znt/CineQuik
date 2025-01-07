import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailsMovies } from "../api/moviesApi";
import "../CSS/details.css";
import SimilarMovies from "./SimilarMovies";
import VideosMovies from "./VideosMovies";

const DetailsMovies = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["detailsMovies", id],
    queryFn: () => fetchDetailsMovies(id),
  });

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movie details: {error.message}</div>;

  return (
    <div className="movie">
      <div className="movie__backBtn">
        <span onClick={goBack}>
          <i className="fas fa-arrow-left"></i>
        </span>
      </div>
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${
            data ? data.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                data ? data.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{data ? data.original_title : ""}</div>
            <div className="movie__tagline">{data ? data.tagline : ""}</div>
            <div className="movie__rating">
              ⭐ {data ? data.vote_average : ""}
              <span className="movie__voteCount">
                {data ? "(" + data.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {data ? data.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {data ? "Release date: " + data.release_date : ""}
            </div>
            <div className="movie__genres">
              {data && data.genres
                ? data.genres.map((genre, index) => (
                    <div key={index}>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </div>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{data ? data.overview : ""}</div>
          </div>
        </div>
      </div>
      <VideosMovies />
      <SimilarMovies />
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {data && data.homepage && (
          <a
            href={data.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p className="movie__homeButton movie__Button">
              Homepage<i className="newTab fas fa-external-link-alt"></i>
            </p>
          </a>
        )}
        {data && data.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + data.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p className="movie__imdbButton movie__Button">
              IMDb<i className="newTab fas fa-external-link-alt"></i>
            </p>
          </a>
        )}
      </div>
      <div className="movie__heading">Production companies</div>
      <div className="movie__production">
        {data &&
          data.production_companies &&
          data.production_companies.map((company, index) => (
            <div key={index}>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie__productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default DetailsMovies;
