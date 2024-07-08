import { useState } from "react";


function Promocode({discount,setDisCount,subTotal}) {
    const [promoCode,setPromoCode]=useState("");
    const [couponApplied, setCouponApplied] = useState(null);
    const handlePromoCodeChange = (e) => {
      setPromoCode(e.target.value);
    };
    
    const handleApplyPromo = () => {
      let discountValue = 0;
      if (promoCode === "DISCOUNT10") {
        discountValue = subTotal * 0.1;
      } else if (promoCode === "DISCOUNT20") {
        discountValue = subTotal * 0.2;
      } else {
        discountValue = 0;
      }

      if (discountValue > 0) {
        setDisCount(discountValue);
        setCouponApplied(true);
      } else {
        setDisCount(0);
        setCouponApplied(false);
      }
      setPromoCode("");
    };
    
  return (
    <div className="mt-4 flex flex-col">
      <label
        htmlFor="promocode"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Promocode
      </label>
      <input
        name="promocode"
        id="promocoode"
        className="block w-full p-2.5 bg-white border border-gray-300 rounded-md"
        placeholder="Enter your code"
        value={promoCode}
        onChange={handlePromoCodeChange}
      />
      {couponApplied === true && (
        <span className="text-green-400 font-medium text-xs">
          Promocode applied
        </span>
      )}
      {couponApplied === false && (
        <span className="text-rose-400 font-medium text-xs">
          Invalid promocode
        </span>
      )}
      <button
        onClick={handleApplyPromo}
        className="bg-teal-400 text-white p-1 w-32 rounded mt-2 hover:bg-teal-500"
      >
        Apply
      </button>
      <hr className="mt-2" />
    </div>
  );
}

export default Promocode