import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="nav-item-home" to="/">
              <img src="/src/assets/img/react.svg" alt="" />
              <span>Homepage</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/AboutPage">
              Chi Siamo
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/Products">
              Prodotti
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
