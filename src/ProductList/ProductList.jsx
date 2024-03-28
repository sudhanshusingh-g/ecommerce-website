import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function ProductList() {
  

  const [isLoading, setIsLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1//products")
      .then(function (response) {
        return response.json();
      })
      .then((res)=>{
        setAllProducts(res);
        setIsLoading(false);
      });
  });

  return (
    <>
      {isLoading ? (
        <img
          src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
          alt="Loading"
        />
      ) : (
        <div>
          {allProducts.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              price={product.price.value}
              image={product.images[0]}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductList;
