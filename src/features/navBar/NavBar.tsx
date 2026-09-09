import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styles from "./NavBar.module.css";
import type { NavBarProps } from "../../types/NavBar";

export default function NavBar(props: NavBarProps) {
  const { links } = props;
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
              >
                {link.name}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
