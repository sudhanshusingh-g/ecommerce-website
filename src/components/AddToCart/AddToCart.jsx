import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

function AddToCart({ product }) {
  const {cart,increaseQuantity,decreaseQuantity}=useContext(CartContext);
  const addQuantity = () => {
    increaseQuantity(product);
  };

  const removeQuantity = () => {
    decreaseQuantity(product);
  };
  const quantity = cart[product.id] ? cart[product.id].quantity : 0;
  if (quantity > 0) {
    return (
      <div>
        <button onClick={removeQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={addQuantity}>+</button>
      </div>
    );
  } else {
    return <button onClick={addQuantity}>AddToCart</button>;
  }
}

export default AddToCart;
