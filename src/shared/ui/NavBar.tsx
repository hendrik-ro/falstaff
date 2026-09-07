import { NavLink } from "react-router-dom";
import "./NavBar.css";
import type { NavBarProps } from "../../types/NavBar";

export default function NavBar(props: NavBarProps) {
  const { links } = props;
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "inactiveNavLink"
                }
                key={link.name}
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
