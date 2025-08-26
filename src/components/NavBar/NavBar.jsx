import '../NavBar/NavBar.css'
import CartWidget from '../Cartwidget/CartWidget'
import logo from '../../assets/img/img1.PNG'

function NavBar() {
  return (
    <nav className="nav">
      <div className="logo-container">
        <a href="home" className="logo-text">SM GLAMOUR🌟</a>
        <a href="home">
          <img
          className="logo-img"
          src={logo}
          alt="logo"
        />
        </a>
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