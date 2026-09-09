export default function HomeContentBackEnd() {
  return (
    <div>
      <h3>Back End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Back end technologies and libraries.
      </p>
      <div className="group">
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s API documentation
          </span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Database"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s Database documentation
          </span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s Server documentation
          </span>
        </span>
      </div>
    </div>
  );
}
