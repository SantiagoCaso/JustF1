import { Link } from "react-router-dom";
import "./NavBar.css" ;
const Navbar = () => {
  return (
    <nav>
      <Link to="/">JustF1</Link>
      <Link to="/teams">Escuderias</Link>
      <Link to="/drivers">Pilotos</Link>
      <Link to="/meetings">Fechas</Link>
    </nav>
  );
};

export default Navbar;
