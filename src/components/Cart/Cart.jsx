// import  { useContext } from "react";
// import CartContext from "../../context/CartContext";
import { Inbox, Trash } from "lucide-react";
import useWindowSize from "../../hooks/useWindowSize";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  // const { cart } = useContext(CartContext);
  const cart=useSelector(state=>state.cart.items);
  const cartList = Object.values(cart);
  const windowSize=useWindowSize();
  console.log(windowSize);
  const subTotal = cartList.reduce((total, item)=>{
    if (item) {
      return total + (item.price.value * item.quantity || 0);
    }
    return total;
  },0);
  return (
    <div className="p-4">
      {cartList.length === 0 ? (
        <div
          className="h-[80vh] w-full flex flex-col items-center justify-center gap-4"
          key={"empty-message"}
        >
          <span className="flex items-center gap-2">
            <Inbox size={24} className="text-slate-400" /> No items in the cart
          </span>
          <Link to={"/"}>
            <span className="border border-teal-400 p-3 rounded-lg hover:bg-teal-400">
              Shop now
            </span>
          </Link>
        </div>
      ) : (
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium">My orders</h1>
            <span className="text-rose-500 underline text-sm cursor-pointer">Remove All</span>
          </div>
          <ol>
            {cartList.map((item) => (
              <li
                className="p-4 mt-2 bg-white/50 shadow-lg rounded-sm flex items-center justify-between"
                key={item.id}
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16">
                    <img src={item.images[0]} alt="Product image" />
                  </div>
                  <div>
                    <span>{item.title}</span>
                    <div>
                      <span className="text-rose-500 underline cursor-pointer text-xs">
                        Remove
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-24">
                  <div>
                    <p className="text-slate-300 font-semibold">Quantity</p>
                    <p className="text-center">{item.quantity}</p>
                  </div>
                  <div>
                    <p className="text-slate-300 font-semibold">Price</p>
                    <p>₹{item.price.value * item.quantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div>Sub Total :{subTotal}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
