import '../NavBar/NavBar.css'
import CartWidget from '../Cartwidget/CartWidget.jsx';
import logo from '../../assets/img/img1.PNG'
import { Link } from "react-router-dom";

function NavBar() {
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
        <li><Link to="/productos">PRODUCTOS</Link></li>
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