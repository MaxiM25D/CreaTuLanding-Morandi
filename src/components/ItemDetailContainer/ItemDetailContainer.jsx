import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../data/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const productosRef = collection(db, "productos");

        // Buscamos por el campo "id" que cargaste dentro del documento
        const q = query(productosRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const docSnap = querySnapshot.docs[0];
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error("Error obteniendo producto:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>⌛ Cargando...</p>;
  if (!item) return <p>Producto no encontrado</p>;

  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;