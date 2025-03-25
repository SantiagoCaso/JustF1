import { Link } from "react-router-dom";
import "./NavBar.css" ;
const Navbar = () => {
  return (
    <nav>
      <Link to="/">JustF1</Link>
      <Link to="/escuderias">Escuderias</Link>
      <Link to="/pilotos">Pilotos</Link>
      <Link to="/monoplazas">Monoplazas</Link>
    </nav>
  );
};

export default Navbar;
