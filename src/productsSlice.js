import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "product",
  initialState: { products: [], totalPrice: 0, sortBy: '', category: '', priceRange: '', },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      localStorage.setItem('key', product.id)
      const existingProduct = state.products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        product.quantity = 1;
        state.products.push(product);
      }
      state.totalPrice += product.price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(p => p.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.products = state.products.filter(p => p.id !== product.id);
        } else {
          existingProduct.quantity--;
        }
        state.totalPrice -= existingProduct.price;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity++;
        state.totalPrice += product.price;
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find(p => p.id === action.payload.id);
      if (product) {
        if (product.quantity === 1) {
          state.products = state.products.filter(p => p.id !== action.payload.id);
        } else {
          product.quantity--;
          state.totalPrice -= product.price;
          localStorage.setItem('cart', JSON.stringify(state));
        }
      }
    },
    loadCartFromStorage: (state) => {
      const cartData = localStorage.getItem('cart');
      if (cartData) {
        const { products, totalPrice } = JSON.parse(cartData);
        state.products = products;
        state.totalPrice = totalPrice;
      }
    },
    clearCart: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    },

    setCategory(state, action) {
      state.category = action.payload;
    },
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    clearFilter(state) {
      state.category = '';
      state.priceRange = '';
      state.sortBy = '';
    },

  }

})


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, loadCartFromStorage, setSortBy } = productsSlice.actions
export default productsSlice.reducer