import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    toggleQuantity: (state, action) => {
      const item = state.cartItems.find((itm) => itm.id === action.payload.id);
      action.payload.toggleType === "+"
        ? (item.amount = item.amount + action.payload.amountChange)
        : (item.amount = item.amount - action.payload.amountChange);
    },
    calculateTotals: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        totalAmount += item.amount;
        totalPrice += item.price * item.amount;
      });
      state.amount = totalAmount;
      state.total = Math.round(totalPrice * 100) / 100;
    },
  },
});

export const { clearCart, removeItem, toggleQuantity, calculateTotals } =
  cartSlice.actions;

// console.log(cartSlice);

export default cartSlice.reducer;
