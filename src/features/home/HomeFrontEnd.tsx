import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentFrontEnd() {
  const internalContent = [
    {
      title: "DOM",
      path: "/frontend/dom",
      tooltip: "Document Object Model",
    },
    { title: "React", path: "/frontend/react", tooltip: "React" },
    {
      title: "Redux",
      path: "/frontend/redux",
      tooltip: "Redux & Redux Toolkit",
    },
  ];
  const externalContent = [
    {
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      tooltip: "Mozilla Developer Network`s HTML documentation",
    },
    {
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      tooltip: "Mozilla Developer Network`s CSS documentation",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      tooltip: "Mozilla Developer Network`s JavaScript documentation",
    },
  ];

  return (
    <div>
      <h3>Front End</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Front end technologies and libraries.
      </p>
      <div className={style.group}>
        {internalContent.map((item, index) => (
          <span key={index} className={style.tooltip}>
            <Link className={style.internalLink} to={item.path}>
              {item.title}
            </Link>
            <span className={style.tooltiptext}>{item.tooltip}</span>
          </span>
        ))}
        {externalContent.map((item, index) => (
          <span key={index} className={style.tooltip}>
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
