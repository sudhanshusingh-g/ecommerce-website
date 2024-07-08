// import  { useContext } from "react";
// import CartContext from "../../context/CartContext";
import { Inbox } from "lucide-react";
// import useWindowSize from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../../redux/CartSlice/cartSlice";
import { useState } from "react";
import Promocode from "../Promocode/Promocode";

function Cart() {
  // const { cart } = useContext(CartContext);
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.items);
  const cartList = Object.values(cart);
  // const windowSize=useWindowSize();
  const [shippingValue,setShippingValue]=useState(100);
  const [disCount, setDisCount] = useState(0);
  const subTotal = cartList.reduce((total, item)=>{
    if (item) {
      return total + (item.price.value * item.quantity || 0);
    }
    return total;
  },0);

  const handleRemoveAll=()=>{
    dispatch(clearCart());
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleShippingChange = (event) => {
    const value = event.target.value;
    if (value === "standard") {
      setShippingValue(100);
    } else if (value === "express") {
      setShippingValue(250);
    }
  };
  const totalCost = subTotal + shippingValue - disCount;
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
            <span
              onClick={handleRemoveAll}
              className="text-rose-500 underline text-sm cursor-pointer"
            >
              Remove All
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 justify-between">
            <table className="border-collapse border w-full lg:w-[60%] mt-2 table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 ">Product</th>
                  <th className="p-2 ">Quantity</th>
                  <th className="p-2 ">Price</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item) => (
                  <tr
                    className="bg-white hover:bg-gray-100 transition duration-300"
                    key={item.id}
                  >
                    <td className="p-4 flex items-center gap-4">
                      <div className="h-16 w-16">
                        <img
                          src={item.images[0]}
                          alt="Product"
                          className="h-full w-full object-cover rounded-md"
                        />
                      </div>
                      <div>
                        <span className="font-semibold">{item.title}</span>
                        <div>
                          <span
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-rose-500 underline cursor-pointer text-xs mt-2 inline-block"
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <p className="text-slate-700 font-semibold">
                        {item.quantity}
                      </p>
                    </td>
                    <td className="p-4 text-center">
                      <p className="text-slate-700 font-semibold">
                        ₹{item.price.value * item.quantity}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" bg-gray-100 flex-1 mt-2 p-4">
              <div className="">
                <h2>Order Summary</h2>
                <hr className="mt-4" />
              </div>
              <div className="font-medium text-gray-600 flex justify-between items-center">
                <p>Items ({cartList.length})</p>
                <p>₹{subTotal}</p>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="shipping"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Shipping
                </label>
                <select
                  name="shipping"
                  id="shipping"
                  className="block w-full p-2.5 bg-gray-100 border border-gray-300 rounded-md"
                  onChange={handleShippingChange}
                  defaultValue={"standard"}
                >
                  <option value="standard">Standard Delivery - ₹100</option>
                  <option value="express">Express Delivery - ₹250</option>
                </select>
              </div>
              <Promocode
                disCount={disCount}
                setDisCount={setDisCount}
                subTotal={subTotal}
              />
              <div className="flex items-center justify-between my-2">
                <p>Total Cost</p>
                {disCount > 0 ? (
                  <div className="flex gap-2 items-center">
                    <p className="font-semibold line-through text-rose-400 text-xs">
                      ₹{totalCost + disCount}
                    </p>
                    <p className="font-semibold">₹{totalCost}</p>
                  </div>
                ) : (
                  <div>
                    <p className="font-semibold">₹{totalCost}</p>
                  </div>
                )}
              </div>
              <div>
                <button className="bg-teal-700 text-white w-full p-2 rounded hover:bg-teal-800">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
