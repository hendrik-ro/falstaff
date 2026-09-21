import { Link } from "react-router-dom";
import style from "./Home.module.css";

export default function HomeContentDataAlgorithm() {
  const internalContent = [
    {
      title: "Sort",
      path: "/falstaff/data/sort",
      tooltip: "Sorting algorithms",
    },
  ];

  return (
    <div>
      <h3>Data</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>Data structures and algorithms.</p>
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
          <p className={style.placeholder}>Search</p>
          <span className={style.tooltiptext}>Not yet implemented</span>
        </span>
      </div>
    </div>
  );
}
