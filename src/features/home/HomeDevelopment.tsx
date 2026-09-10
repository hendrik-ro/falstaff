import style from "./Home.module.css";

export default function HomeContentDevelopment() {
  return (
    <div>
      <h3>Development</h3>
      <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
        Development methods.
      </p>
      <div className={style.group}>
        <span className={style.tooltip} id="placeholder">
          <p className={style.placeholder}>Testing</p>
          <span className={style.tooltiptext}>Not yet implemented</span>
        </span>
        <span className={style.tooltip} id="placeholder">
          <p className={style.placeholder}>CI/CD</p>
          <span className={style.tooltiptext}>Not yet implemented</span>
        </span>
      </div>
    </div>
  );
}
