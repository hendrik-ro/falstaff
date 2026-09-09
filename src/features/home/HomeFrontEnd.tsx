export default function HomeContentFrontEnd() {
  return (
    <div>
      <h3>Front End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Front end technologies and libraries.
      </p>
      <div className="group">
        <span className="tooltip">
          <p>Frameworks</p>
          <span className="tooltiptext">Not yet implemented</span>
        </span>
        <span className="tooltip">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span className="tooltiptext">React`s official website</span>
        </span>
        <span className="tooltip">
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span className="tooltiptext">Redux Toolkit`s official website</span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s documentation
          </span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s documentation
          </span>
        </span>
        <span className="tooltip">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript
          </a>
          <span className="tooltiptext">
            Mozilla Developer Network`s documentation
          </span>
        </span>
      </div>
    </div>
  );
}
