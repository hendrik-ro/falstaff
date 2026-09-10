import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { selectChapterLinks, selectLinks } from "./navBarSlice";

export default function NavBar() {
  const links = useSelector(selectLinks);
  const chapterLinks = useSelector(selectChapterLinks);
  useEffect(() => {
    const navBar = document.getElementById("navBar");
    if (navBar) {
      navBar.style.width = "1%";
      requestAnimationFrame(() => {
        navBar.style.width = "100%";
      });
    }
  }, []);
  return (
    <nav id="navBar" className={styles.nav}>
      <ul>
        {links.map((link) => {
          const id = uuidv4();
          return (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.inactiveNavLink
                }
                to={link.to}
                end
              >
                {link.name}{" "}
              </NavLink>
            </li>
          );
        })}
        {chapterLinks && chapterLinks.length > 0 && <li>|</li>}
        {chapterLinks.map((chapterLink) => {
          const id = uuidv4();
          return (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? styles.activeChapterLink
                    : styles.inactiveChapterLink
                }
                to={chapterLink.to}
                end
              >
                {chapterLink.name}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
