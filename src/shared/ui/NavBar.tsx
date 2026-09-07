import { NavLink } from "react-router-dom";
import "./NavBar.css";
import type { NavBarProps } from "../../types/NavBar";
import { v4 as uuidv4 } from "uuid";

export default function NavBar(props: NavBarProps) {
  const { links } = props;
  return (
    <nav>
      <ul>
        {links.map((link) => {
          const id = uuidv4();
          return (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeNavLink" : "inactiveNavLink"
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
