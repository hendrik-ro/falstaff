import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentBackEnd() {
  return (
    <div>
      <h3>Back End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Back end technologies and libraries.
      </p>
      <div className={style.group}>
        <span className={style.tooltip}>
          <a
            className={style.externalLink}
            href="https://developer.mozilla.org/en-US/docs/Web/API"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s API documentation
          </span>
        </span>
        <span className={style.tooltip}>
          <a
            className={style.externalLink}
            href="https://developer.mozilla.org/en-US/docs/Web/API/Database"
            target="_blank"
            rel="noopener noreferrer"
          >
            Database
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s Database documentation
          </span>
        </span>
        <span className={style.tooltip}>
          <a
            className={style.externalLink}
            href="https://developer.mozilla.org/en-US/docs/Web/API/Server"
            target="_blank"
            rel="noopener noreferrer"
          >
            Server
          </a>
          <span className={style.tooltiptext}>
            Mozilla Developer Network`s Server documentation
          </span>
        </span>
        <span className={style.tooltip}>
          <Link className={style.internalLink} to="/falstaff/node">
            Node
          </Link>
          <span className={style.tooltiptext}>Node.js</span>
        </span>
      </div>
    </div>
  );
}
