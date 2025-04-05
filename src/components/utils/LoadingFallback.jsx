export default function LoadingFallback() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "var(--bg-primary)",
        color: "var(--primary-color)",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <i
          className="fas fa-spinner fa-spin fa-2x"
          style={{ marginBottom: "1rem" }}
        ></i>
        <p>Loading...</p>
      </div>
    </div>
  );
}
