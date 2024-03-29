import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import useWindowSize from "../../hooks/useWindowSize";

function Cart() {
  const { cart } = useContext(CartContext);
  const cartList = Object.values(cart);
  const windowSize=useWindowSize();
  console.log(windowSize);
  const subTotal = cartList.reduce((total, item)=>{
    if (item) {
      return total + (item.price * item.quantity || 0);
    }
    return total;
  },0);
  return (
    <div>
      {cartList.length === 0 ? (
        <div key={"empty-message"}>No items added</div>
      ) : (
        <div>
        <ol>
          {cartList.map((item) => (
            <li key={item.id}>
              <div>
                <span>{item.title}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price:{item.price * item.quantity}</span>
              </div>
            </li>
          ))}
        </ol>
        <div>Total Price :{subTotal}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
