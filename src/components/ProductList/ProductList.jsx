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
    <>
      {isLoading ? (
        <img
          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
          alt="Loading"
        />
      ) : (
        <div>
          <Link to="/cart">Cart</Link>
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default memo(ProductList);
