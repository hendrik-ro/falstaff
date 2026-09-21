import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentDevelopment() {
  const internalContent = [
    {
      title: "Testing",
      path: "/falstaff/dev/testing",
      tooltip: "Testing in development",
    },
  ];
  return (
    <div>
      <h3>Development</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Development methods.
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
        <span className={style.tooltip} id="placeholder">
          <p className={style.placeholder}>CI/CD</p>
          <span className={style.tooltiptext}>Not yet implemented</span>
        </span>
      </div>
    </div>
  );
}
