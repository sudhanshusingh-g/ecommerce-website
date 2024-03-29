import React from "react";

function AddToCart({
  cart,
  setCart,
  increaseQuantity,
  product,
  decreaseQuantity,
}) {
  const addQuantity = () => {
    increaseQuantity(product);
  };

  const removeQuantity=()=>{
    decreaseQuantity(product);
  }
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
