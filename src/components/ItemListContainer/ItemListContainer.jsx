import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosByCategoria } from "../../data/productos";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (categoriaId) {
      getProductosByCategoria(categoriaId).then((res) => setItems(res));
    } else {
      getProductos().then((res) => setItems(res));
    }
  }, [categoriaId]);

  return (
    <section className="item-list-container">
      <h2 className="title-list-container">{categoriaId ? `PRODUCTOS DE ${categoriaId.toUpperCase()}` : "TODOS LOS PRODUCTOS"}</h2>
      <ItemList productos={items} />
    </section>
  );
}

export default ItemListContainer;