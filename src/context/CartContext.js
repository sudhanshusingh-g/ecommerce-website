// Context- Global State
import { createContext } from "react";

const CartContext = createContext({
  cart: {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export default CartContext;
// Provider- Pseudo parent
// Selector -Extract global state in components
