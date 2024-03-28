import React from 'react'

function AddToCart({cart,setCart,increaseQuantity}) {
    const addQuantity=(product)=>{
        increaseQuantity(product);
    }
  return (
    <button onClick={addQuantity}>AddToCart</button>
  )
}

export default AddToCart