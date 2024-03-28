import React from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart/AddToCart";
function ProductCard({ title, active, price, image }) {
  return (
    <div className="productCard" style={{ color: `${active}` }}>
      <h2>{title}</h2>
      <p>{price}</p>
      {/* <img src={image} alt="" /> */}
      <AddToCart />
    </div>
  );
}

export default ProductCard;
