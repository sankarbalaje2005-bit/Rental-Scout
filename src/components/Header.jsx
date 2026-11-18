import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/">
        Rental Scout
      </NavLink>

      <nav aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/listings">Browse</NavLink>
        <NavLink to="/saved">Saved</NavLink>
      </nav>
    </header>
  );
}

export default Header;
