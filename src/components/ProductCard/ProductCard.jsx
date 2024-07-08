import React from "react";
import AddToCart from "../AddToCart";
import Rating from "../Rating";

function ProductCard({ product, active }) {
  return (
    <div
      className="border shadow p-4 rounded flex flex-col lg:flex-row lg:items-center justify-between lg:w-[32%] w-full mb-4 lg:mb-0 lg:justify-between gap-3"
      style={{ color: `${active}` }}
    >
      <div className="w-full lg:w-40 mb-4 lg:mb-0">
        <img
          src={product.images[0]}
          alt="Product"
          className="object-fill w-full h-auto lg:h-50"
        />
      </div>
      <div className="flex flex-col gap-2 justify-start w-full lg:w-auto">
        <h2 className="font-medium">{product.title}</h2>
        <p className="text-xl">₹{product.price.value}</p>
        <Rating rating={product.rating.value} maxRating={5} />
        <AddToCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;
