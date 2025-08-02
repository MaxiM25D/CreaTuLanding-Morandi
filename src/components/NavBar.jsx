import './NavBar.css'
import CartWidget from './CartWidget'
import logo from '../assets/img/IMG-1.PNG'; 

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="home" className="logo-text">SM GLAMOUR🌟</a>
        <img
          
          className="logo-img"
          src={logo}
          alt="logo"
        />
      </div>
      <ul className="nav-links">
        <li><a href="inicio">INICIO</a></li>
        <li><a href="productos">PRODUCTOS</a></li>
        <li><a href="contacto">CONTACTO</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;