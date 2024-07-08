import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:{},
    },
    reducers:{
        addItem:(state,action)=>{
            const product=action.payload;
            if(state.items[product.id]){
                 state.items[product.id].quantity += 1;
            }
            else{
                state.items[product.id] = { ...product, quantity: 1 };
            }
        },
        removeItem:(state,action)=>{
             const productId = action.payload.id;
             if (state.items[productId].quantity <= 1) {
               delete state.items[productId];
             } else {
               state.items[productId].quantity -= 1;
             }
        },
        clearCart:(state)=>{
            state.items={};
        }
    }
})

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;