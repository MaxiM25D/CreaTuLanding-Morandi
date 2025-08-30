import { useState } from "react";
import "./Carrito.css";

function Carrito({ greeting }) {
  const [carrito, setCarrito] = useState([]);

  return (
    <section className="carrito">
      <h1 className="carrito-title">{greeting}</h1>
      {carrito.length === 0 ? (
        <p className="carrito-empty">Tu carrito está vacío 🛒</p>
      ) : (
        <ul className="carrito-list">
          {carrito.map((prod) => (
            <li key={prod.id} className="carrito-item">
              <span className="item-nombre">{prod.nombre}</span>
              <span className="item-precio">${prod.precio}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Carrito;