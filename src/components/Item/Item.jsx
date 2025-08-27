import { Link } from "react-router-dom";
import "./Item.css";
function Item({ producto }) {
  return (
    <div className="producto-card">
      <img src={producto.img} alt={producto.nombre} className="producto-img" />
      <h3 className="producto-nombre">{producto.nombre}</h3>
      <p className="producto-precio">${producto.precio}</p>
      <Link to={`/producto/${producto.id}`} className="btn-detalle">
        Ver Detalle...
      </Link>
    </div>
  );
}

export default Item;