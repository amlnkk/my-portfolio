import { NavLink } from "react-router-dom";

import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <nav className="container">
        <ul className="header-list">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "header-link active" : "header-link"
              }
            >
              Про мене
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-city"
              className={({ isActive }) =>
                isActive ? "header-link active" : "header-link"
              }
            >
              Моє місто
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-future"
              className={({ isActive }) =>
                isActive ? "header-link active" : "header-link"
              }
            >
              Моє майбутнє
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
