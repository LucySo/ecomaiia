import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  products: [],
  open : false
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.push(action.payload);
    },
    close : (state) => {state.open = false},
    open : (state) => {state.open = true},
    removeFromCart : (state, action) => {
      const id = action.payload
      state.products = state.products.filter(product => product.id !== id);
    }
  },
});

export const { addToCart, close, open, removeFromCart } = cartSlice.actions;

export const selectProducts = (state) => state.cart.products;
export const selectOpen = (state) => state.cart.open;


export default cartSlice.reducer;


