import { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import "./Carrito.css";

function Carrito() {
  const { items, totalPrice, removeItemFromCart, clearCart } = useContext(CartContext);
  console.log("Carrito items:", items);

  return (
    <section className="carrito">
      <h1 className="carrito-title">🛒 CARRITO DE COMPRAS 🛒</h1>

      {(!items || items.length === 0) ? (
        <p className="carrito-empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="carrito-list">
            {items.map((prod) => (
              <li key={String(prod.id)} className="carrito-item">
                <div>
                  <span className="item-nombre">{prod.nombre || "Sin nombre"}</span>
                  <span className="cantidad"> (x{Number(prod.cantidad) || 0})</span>
                  <img src={prod.img} alt={prod.nombre} width="50" height="50" />
                </div>

                <div className="item-precio-container">
                  <span className="item-precio">
                    ${ (Number(prod.precio || 0) * Number(prod.cantidad || 0)).toLocaleString() }
                  </span>
                  <button onClick={() => removeItemFromCart(prod.id)} className="btn-remove">
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="carrito-footer">
            <h2 className="carrito-total">Total: ${Number(totalPrice).toLocaleString()}</h2>
            <button onClick={clearCart} className="btn-clear">VACIAR CARRITO🗑️</button>
          </div>
        </>
      )}
    </section>
  );
}

export default Carrito;