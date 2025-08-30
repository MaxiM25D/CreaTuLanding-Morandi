import { Link } from "react-router-dom";
import { useState } from "react";
import '../NavBar/NavBar.css'
import CartWidget from '../Cartwidget/CartWidget.jsx';
import logo from '../../assets/img/img1.PNG'


function NavBar() {

  const [open, setOpen] = useState(false);

  return (
  <header>  
    <nav className="nav">
      <div className="logo-container">
        <Link to="/" className="logo-text">SM GLAMOUR🌟</Link>
        <Link to="/">
          <img
            className="logo-img"
            src={logo}
            alt="logo"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">INICIO</Link></li>

        <li 
            className="dropdown" 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)}
          >
        <li><Link to="/productos" className="dropdown-title">PRODUCTOS▾</Link></li>    
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/categoria/anillos">ANILLOS</Link></li>
                <li><Link to="/categoria/aros">AROS</Link></li>
                <li><Link to="/categoria/cadenas">CADENAS</Link></li>
                <li><Link to="/categoria/pulceras">PULCERAS</Link></li>
              </ul>
            )}
          </li>
        <li><Link to="/contacto">CONTACTO</Link></li>
      </ul>
      <Link to="/carrito">
        <CartWidget />
      </Link>
    </nav>
  </header>
  );
}

export default NavBar;