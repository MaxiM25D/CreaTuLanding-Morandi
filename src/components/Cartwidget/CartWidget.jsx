import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";
import { useContext } from "react";
import { Badge } from "antd";
import './CartWidget.css'


function CartWidget() {

  const valorDelContexto = useContext(CartContext)

  return (
    <div className="cart-widget">
      <Badge count={valorDelContexto.totalQuantity} >
        <FaShoppingCart className='cart-btn' />
      </Badge>
    </div>
  )
}

export default CartWidget