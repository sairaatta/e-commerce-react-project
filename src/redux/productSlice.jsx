import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';


const initialState =  {
    products : [],
    searchTerm : '',
    filteredData : [],
}

export const fetchCategoryProducts = createAsyncThunk('products/fetchCategoryProducts', async (category) => {
  const response = await fetch(`https://api.example.com/products?category=${category}`);
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers : {
        setProducts: (state, action) => {
            state.products = action.payload;

        },
        addProduct: (state, action) => {
          state.push(action.payload);
        },
        setFilteredData: (state, action) => {
            state.filteredData = state.products.filter(
                product => product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload; 
          },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
          state.categoryProducts = action.payload;
        })
        .addCase(fetchCategoryProducts.rejected, (state, action) => {
          state.error = action.error.message;
        });
    }
});


export const getFilteredProducts = (searchTerm, allProducts) => {
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };



export const selectProducts = (state) => state.product.products;
export const selectFilteredData = (state) => state.product.filteredData;

export const {addProduct, setProducts, setFilteredData ,setSearchTerm } = productSlice.actions;
export default productSlice.reducer;

