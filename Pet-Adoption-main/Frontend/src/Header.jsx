import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
