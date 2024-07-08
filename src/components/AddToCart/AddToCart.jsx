// import  { useContext } from "react";
// import CartContext from "../../context/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/CartSlice/cartSlice";

function AddToCart({ product }) {
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.items);
  const quantity=cart[product.id] ? cart[product.id].quantity:0;

  // const {cart,increaseQuantity,decreaseQuantity}=useContext(CartContext);
  
  // const addQuantity = () => {
  //   increaseQuantity(product);
  // };
  const addQuantity = () => {
    dispatch(addItem(product));
  };

  // const removeQuantity = () => {
  //   decreaseQuantity(product);
  // };
   const removeQuantity = () => {
     dispatch(removeItem(product));
   };
  if (quantity > 0) {
    return (
      <div>
        <button
          className="bg-teal-400 w-fit p-2 text-sm rounded"
          onClick={removeQuantity}
        >
          -
        </button>
        <span className="p-2 bg-slate-100">{quantity}</span>
        <button
          className="bg-teal-400 w-fit p-2 text-sm rounded"
          onClick={addQuantity}
        >
          +
        </button>
      </div>
    );
  } else {
    return <button className="text-left bg-teal-400 w-fit p-2 text-sm rounded" onClick={addQuantity}>Add To Cart</button>;
  }
}

export default AddToCart;
