import { Link } from "react-router-dom";
import productos from "../../data/productos"; 
import "./Inicio.css";

function Inicio({ greeting }) {
  const destacado = productos.find((prod) => prod.id === "7");

  return (
    <section className="inicio">
      <h1 className="inicio-title">{greeting}</h1>
      <p className="inicio-subtitle">
        Bienvenido a <span className="brand">SM Glamour 🌟</span>, tu tienda de accesorios exclusivos.
      </p>

      <div className="inicio-banner">
        <Link to={`/producto/${destacado.id}`}>
          <img
            className="banner-img"
            src={destacado.img}
            alt={destacado.nombre}
          />
        </Link>
      </div>
    </section>
  );
}

export default Inicio;