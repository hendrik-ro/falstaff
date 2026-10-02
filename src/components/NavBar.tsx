import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
];

export default function NavBar() {
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
        {links.map((link) => (
          <li key={link.to}>
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
        ))}
      </ul>
    </nav>
  );
}
