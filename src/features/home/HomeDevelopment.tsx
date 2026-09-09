export default function HomeContentDevelopment() {
  return (
    <div>
      <h3>Development</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Development methods.
      </p>
      <div className="group">
        <span className="tooltip">
          Testing
          <span className="tooltiptext">Not yet implemented</span>
        </span>
        <span className="tooltip">
          CI/CD
          <span className="tooltiptext">Not yet implemented</span>
        </span>
      </div>
    </div>
  );
}
