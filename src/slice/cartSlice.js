import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], // Load cart from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const exists = state.cart.some((course) => course.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
        localStorage.setItem("cart", JSON.stringify(state.cart)); // Save to localStorage
      }
    },
    removeTocart: (state, action) => {
      state.cart = state.cart.filter((course) => course.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Save to localStorage
    },
    setCart: (state, action) => {
      state.cart = action.payload;
      localStorage.setItem("cart", JSON.stringify(state.cart)); // Save to localStorage
    },
  },
});

export const { addTocart, removeTocart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
