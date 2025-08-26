import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ItemListContainer.css";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  return (
    <div className="item-list-container">
      <h2 className="title">{greeting}</h2>
      <div className="product-grid">
        {productos.map((prod) => (
          <ProductCard key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;