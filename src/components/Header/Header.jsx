import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Kasa" />
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
