import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

export default function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

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
        <button onClick={() => setBudgetMode(!budgetMode)}>
          {budgetMode ? "turn budget mode OFF" : "turn budget mode ON"}
        </button>
      </nav>
    </>
  );
}
