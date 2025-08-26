import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ producto }) {
  return (
    <div className="product-card">
      <img src={producto.image} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}

export default ProductCard;