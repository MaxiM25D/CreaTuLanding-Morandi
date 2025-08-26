import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="item-detail">
        <h2>{producto.title}</h2>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.description}</p>
        <h3>${producto.price}</h3>
        <button>Añadir al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;