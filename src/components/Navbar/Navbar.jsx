import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = Object.keys(cartItems).length;

  return (
    <div className="bg-slate-200 w-ful p-4 flex items-center justify-between">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" width={32} height={32} />
        <h1 className="text-2xl font-semibold flex items-center gap-x-2">
          Ecom
        </h1>
      </Link>
      <Link to={"/cart"} className="relative">
        {cartLength > 0 && (
          <span className="absolute bg-rose-500 p-2 rounded-lg h-4 w-4 text-xs flex items-center justify-center text-white top-[-8px] left-3">
            {cartLength}
          </span>
        )}

        <ShoppingBagIcon size={18} />
      </Link>
    </div>
  );
}

export default Navbar;
