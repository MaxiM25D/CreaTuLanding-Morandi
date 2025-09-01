import { Link } from "react-router-dom";
import productos from "../../data/productos"; 
import "./Inicio.css";

function Inicio({ greeting }) {
  const destacados = productos.filter(
    (prod) => prod.id === "7" || prod.id === "1"
  );

  return (
    <section className="inicio">
      <h1 className="inicio-title">{greeting}</h1>
      <p className="inicio-subtitle">
        Bienvenido a <span className="brand">SM Glamour 🌟</span>, tu tienda de accesorios exclusivos.
      </p>

      <div className="inicio-destacados">
        {destacados.length > 0 ? (
          destacados.map((prod) => (
            <div key={prod.id} className="inicio-banner">
              <Link to={`/producto/${prod.id}`}>
                <img
                  className="banner-img"
                  src={prod.img}
                  alt={prod.nombre}
                />
              </Link>
              <h3 className="banner-title">{prod.nombre}</h3>
              <p className="producto-precio">${prod.precio}</p>
              <Link to={`/producto/${prod.id}`} className="btn-detalle">
                Ver Detalle...
              </Link>
            </div>
          ))
        ) : (
          <p>No se encontraron productos destacados...</p>
        )}
      </div>
    </section>
  );
}

export default Inicio;