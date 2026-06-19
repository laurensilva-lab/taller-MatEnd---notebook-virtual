
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar ">
        <Link className="navbar-brand" to="/">
          Notebook Matemática
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            Inicio
          </Link>
          <Link className="nav-link" to="/tema1">
            Tema 1
          </Link>
          <Link className="nav-link" to="/tema2">
            Tema 2
          </Link>
            <Link className="nav-link" to="/tema3">
              Tema 3
            </Link>
            <Link className="nav-link" to="/tema4">
              Tema 4
            </Link>
            <Link className="nav-link" to="/tema5">
              Tema 5
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
