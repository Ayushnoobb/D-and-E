import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartProduct",
  initialState : [],
  reducers : {
    addToCart : (state , action) =>{
      state.cart.push(action.payload)
    },
    removeFromCart : (state , action) =>{
      state.cart = state.cart.filter(product => {
        product.id != action.payload
      })
    }
  }
});

export const {addToCart , removeFromCart} = cartSlice.actions ;
export default cartSlice.reducer 