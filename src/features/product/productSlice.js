import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from "./productApi"


const initialState = {
  products: [],
  pageCount: 0,
  currentPage: 1
};

const productPerPage = 15;

const countPages = (totalCount) => Math.ceil(totalCount / productPerPage);

export const populateProductsRedux = createAsyncThunk(
  'product/fetchProducts',
  async (currentPage) => {
    const { products, totalCount } = await getProducts(currentPage, productPerPage);
    const pageCount = countPages(totalCount)
    return { products, pageCount };
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(populateProductsRedux.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.pageCount = action.payload.pageCount
      });
  },
});

export const { changePage } = productSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectCurrentPage = (state) => state.product.currentPage
export const selectPageCount = (state) => state.product.pageCount

export default productSlice.reducer;


