import { NavLink } from "react-router-dom";
import "./NavBar.css";
import type { NavBarProps } from "../../types/NavBar";

export default function NavBar(props: NavBarProps) {
  const { links } = props;
  console.log(links);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/falstaff"
            className={({ isActive }) =>
              isActive ? "activeNavLink" : "inactiveNavLink"
            }
          >
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/falstaff/css"
            className={({ isActive }) =>
              isActive ? "activeNavLink" : "inactiveNavLink"
            }
          >
            Test2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
