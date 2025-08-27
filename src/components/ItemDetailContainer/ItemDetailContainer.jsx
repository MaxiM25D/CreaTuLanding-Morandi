import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../data/productos";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductoById(id).then((res) => setItem(res));
  }, [id]);

  if (!item) return <p>⌛Cargando...</p>;

  return (
    <div className="container-detail">
      <h2 className="title">{item.nombre}</h2>
      <img src={item.img} alt={item.nombre} className="img-detail" />
      <p className="precio">Precio: ${item.precio}</p>
      <p className="categoria">Categoría: {item.categoria}</p>
      <button className="btn-carrito">🛒Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;