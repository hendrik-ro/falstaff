import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentFrontEnd() {
  return (
    <div>
      <h3>Front End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Front end technologies and libraries.
      </p>
      <div className={style.group}>
        <span className={style.tooltip}>
          <Link to="/falstaff/frontend/dom">DOM</Link>
          <span className={style.tooltiptext}>Document Object Model</span>
        </span>
        <span className={style.tooltip}>
          <Link to="/falstaff/frontend/react">React</Link>
          <span className={style.tooltiptext}>React</span>
        </span>
        <span className={style.tooltip}>
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span className={style.tooltiptext}>
            Redux Toolkit`s official website
          </span>
        </span>
        <span className={style.tooltip}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s documentation
          </span>
        </span>
        <span className={style.tooltip}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            CSS
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s documentation
          </span>
        </span>
        <span className={style.tooltip}>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s documentation
          </span>
        </span>
      </div>
    </div>
  );
}
