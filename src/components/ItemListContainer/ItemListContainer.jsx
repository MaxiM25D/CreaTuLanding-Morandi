import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../data/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoriaId
      ? query(productosRef, where("categoria", "==", categoriaId))
      : productosRef;

    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data()};
        })
      );
    });
  }, [categoriaId]);

  return (
    <section className="item-list-container">
      <h2 className="title-list-container">
        {categoriaId 
        ? `PRODUCTOS DE ${categoriaId.toUpperCase()}` 
        : "TODOS LOS PRODUCTOS"}
      </h2>
      <ItemList productos={productos} />
    </section>
  );
}

export default ItemListContainer;
