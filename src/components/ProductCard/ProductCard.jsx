import React from "react";
import "./ProductCard.css";
import AddToCart from "../AddToCart";
import Rating from "../Rating";
function ProductCard({
  product,
  active,
}) {
  return (
    <div className="productCard" style={{ color: `${active}` }}>
      <h2>{product.title}</h2>
      <p>{product.price.value}</p>
      {/* <img src={image} alt="" /> */}
      <Rating rating={product.rating.value} maxRating={5}/>
      <AddToCart
        product={product}
      />
    </div>
  );
}

export default ProductCard;
