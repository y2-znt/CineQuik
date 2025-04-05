export default function MovieMetadata({
  rating,
  voteCount,
  runtime,
  releaseDate,
}) {
  return (
    <>
      <div className="movie__rating">
        <i className="fas fa-star" style={{ color: "#f5c518" }}></i>{" "}
        {rating.toFixed(1)}
        <span className="movie__voteCount">
          ({voteCount.toLocaleString()} votes)
        </span>
      </div>
      <div className="movie__runtime">
        <i className="fas fa-clock" style={{ marginRight: "8px" }}></i>
        {runtime ? `${Math.floor(runtime / 60)}h ${runtime % 60}m` : ""}
      </div>
      <div className="movie__releaseDate">
        <i className="fas fa-calendar-alt" style={{ marginRight: "8px" }}></i>
        {releaseDate}
      </div>
    </>
  );
}
