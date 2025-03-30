import { Link } from "react-router-dom";
import "./NavBar.css" ;
const Navbar = () => {
  return (
    <nav>
      <Link to="/">JustF1</Link>
      <Link to="/escuderias">Escuderias</Link>
      <Link to="/drivers">Pilotos</Link>
      <Link to="/monoplazas">Circuitos</Link>
    </nav>
  );
};

export default Navbar;
