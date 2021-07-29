import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;


