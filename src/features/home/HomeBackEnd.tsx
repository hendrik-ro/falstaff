import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentBackEnd() {
  const internalContent = [
    {
      title: "Node",
      path: "/falstaff/backend/nodejs",
      tooltip: "Node.js",
    },
  ];
  const externalContent = [
    {
      title: "API",
      href: "https://developer.mozilla.org/en-US/docs/Web/API",
      tooltip: "Mozilla Developer Network`s API documentation",
    },
    {
      title: "Database",
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Database",
      tooltip: "Mozilla Developer Network`s Database documentation",
    },
    {
      title: "Server",
      href: "https://developer.mozilla.org/en-US/docs/Web/API/Server",
      tooltip: "Mozilla Developer Network`s Server documentation",
    },
  ];
  return (
    <div>
      <h3>Back End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Back end technologies and libraries.
      </p>
      <div className={style.group}>
        {internalContent.map((item) => (
          <span className={style.tooltip}>
            <Link className={style.internalLink} to={item.path}>
              {item.title}
            </Link>
            <span className={style.tooltiptext}>{item.tooltip}</span>
          </span>
        ))}
        {externalContent.map((item) => (
          <span className={style.tooltip}>
            <a
              className={style.externalLink}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
            <span className={style.tooltiptext}>{item.tooltip}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
