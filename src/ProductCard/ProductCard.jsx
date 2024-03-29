import React from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";
function ProductCard({
  product,
  active,
  cart,
  setCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <div className="productCard" style={{ color: `${active}` }}>
      <h2>{product.title}</h2>
      <p>{product.price.value}</p>
      {/* <img src={image} alt="" /> */}
      <AddToCart
        cart={cart}
        setCart={setCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        product={product}
      />
    </div>
  );
}

export default ProductCard;
