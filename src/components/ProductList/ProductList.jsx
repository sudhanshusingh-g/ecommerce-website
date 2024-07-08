import React, { memo, useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        setAllProducts(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      {isLoading ? (
        <div className="h-full w-full flex items-center justify-center absolute top-5">
          <img
            src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
            alt="Loading"
            width={100}
          />
        </div>
      ) : (
        <div className="w-full p-4 flex flex-wrap gap-2">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(ProductList);
