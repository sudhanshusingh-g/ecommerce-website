import React from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";
function ProductCard({ title, active, price, image,cart,setCart,increaseQuantity }) {
  return (
    <div className="productCard" style={{ color: `${active}` }}>
      <h2>{title}</h2>
      <p>{price}</p>
      {/* <img src={image} alt="" /> */}
      <AddToCart
        cart={cart}
        setCart={setCart}
        increaseQuantity={increaseQuantity}
      />
    </div>
  );
}

export default ProductCard;
