import './CartWidget.css'

function CartWidget() {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="carrito">🛒</span>
      <span className="cart-count">3</span>
    </div>
  )
}

export default CartWidget