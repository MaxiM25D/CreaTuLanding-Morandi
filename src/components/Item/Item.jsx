import { Link } from "react-router-dom";
import "./Item.css";
function Item({ producto }) {
  return (
    <div className="producto-card">
      <Link to={`/producto/${producto.id}`}>
      <img src={producto.img} alt={producto.nombre} className="producto-img" />
      </Link>
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio}</p>
      <Link to={`/producto/${producto.id}`} className="btn-detalle">
        Ver Detalle...
      </Link>
    </div>
  );
}

export default Item;