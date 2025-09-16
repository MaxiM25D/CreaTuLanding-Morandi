import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../../data/productos";
import ItemDetail from "../ItemDetail/ItemDetail"; 
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductoById(id).then((res) => setItem(res));
  }, [id]);

  if (!item) return <p>⌛Cargando...</p>;

  return (
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;