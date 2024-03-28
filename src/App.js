import "./App.css";
import ProductList from "./ProductList";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({});
  const increaseQuantity=(product)=>{

  }
  return (
    <div className="App">
      <ProductList cart={cart} setCart={setCart} increaseQuantity={increaseQuantity}/>
    </div>
  );
}

export default App;
