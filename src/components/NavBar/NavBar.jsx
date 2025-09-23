import { Link } from "react-router-dom";
import { useState } from "react";
import "../NavBar/NavBar.css";
import CartWidget from "../Cartwidget/CartWidget.jsx";
import logo from "../../assets/img/img1.PNG";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header>
      <nav className="nav">
        <div className="logo-container">
          <Link to="/" className="logo-text">SM GLAMOUR🌟</Link>
          <Link to="/">
            <img className="logo-img" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
          <li
            className="dropdown"
            onMouseEnter={() => window.innerWidth > 768 && setOpenDropdown(true)}
            onMouseLeave={() => window.innerWidth > 768 && setOpenDropdown(false)}
          >
            <Link
              to="/productos"
              className="dropdown-title"
              onClick={() => {
                if (window.innerWidth <= 768) {
                  setOpenDropdown(!openDropdown);
                }
              }}
            >
              Productos ▾
            </Link>
            {openDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/categoria/anillos" onClick={() => setMenuOpen(false)}>Anillos</Link></li>
                <li><Link to="/categoria/aros" onClick={() => setMenuOpen(false)}>Aros</Link></li>
                <li><Link to="/categoria/cadenas" onClick={() => setMenuOpen(false)}>Cadenas</Link></li>
                <li><Link to="/categoria/pulceras" onClick={() => setMenuOpen(false)}>Pulceras</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
        </ul>

        <Link to="/carrito" onClick={() => setMenuOpen(false)}>
          <CartWidget />
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;