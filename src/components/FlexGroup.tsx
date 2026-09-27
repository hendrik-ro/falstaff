import { Link } from "react-router-dom";
import type { FlexGroupProps } from "../types/FlexGroup";
import style from "./FlexGroup.module.css";

export default function FlexGroup(props: FlexGroupProps) {
  const { internalContent, externalContent, placeholders } = props;

  return (
    <div className={style.group}>
      {internalContent &&
        internalContent.map((item, index) => (
          <span key={index} className={style.tooltip}>
            <Link className={style.internalLink} to={item.path}>
              {item.title}
            </Link>
            <span className={style.tooltiptext}>{item.tooltip}</span>
          </span>
        ))}
      {externalContent &&
        externalContent.map((item, index) => (
          <span key={index} className={style.tooltip}>
            <a
              className={style.externalLink}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
            <span className={style.tooltiptext}>{item.tooltip}</span>
          </span>
        ))}
      {placeholders &&
        placeholders.map((placeholder, index) => (
          <span key={index} className={style.tooltip}>
            <p className={style.placeholder}>{placeholder}</p>
            <span className={style.tooltiptext}>Not yet implemented</span>
          </span>
        ))}
    </div>
  );
}
