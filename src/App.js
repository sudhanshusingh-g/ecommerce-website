import "./App.css";
import ProductList from "./components/ProductList";
import { useState } from "react";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart/Cart";


function App() {
  const [cart, setCart] = useState({});

  const increaseQuantity = (product) => {
    const newCart = { ...cart };
    if (!newCart[product.id]) {
      newCart[product.id] = {
        id: product.id,
        price: product.price.value,
        title: product.title,
        quantity: 0,
      };
    }
    newCart[product.id].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (product) => {
    const newCart = { ...cart };
    if (!newCart[product.id]) return;
    newCart[product.id].quantity -= 1;
    if (newCart[product.id].quantity <= 0) {
      delete newCart[product.id];
    }
    setCart(newCart)
  };
  return (
    <CartContext.Provider value={{cart,increaseQuantity,decreaseQuantity}}>
      <div className="App">
        <Cart/>
        <ProductList/>
      </div>
    </CartContext.Provider>
  );
}

export default App;
