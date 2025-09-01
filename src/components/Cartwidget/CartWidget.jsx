import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  return (
    <div className="cart-widget">
      <FaShoppingCart className='cart-btn' />
      <span className="cart-count">3</span>
    </div>
  )
}

export default CartWidget