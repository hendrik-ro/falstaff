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
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Node
          </a>
          <span className={style.tooltiptext}>Node`s official website</span>
        </span>
      </div>
    </div>
  );
}
