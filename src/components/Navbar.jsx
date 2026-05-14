import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;