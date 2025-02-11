import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initial = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initial,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );

      if (itemIndex === -1) {
        state.value.push({ ...action.payload, quantity: 1 });
      } else {
        state.value[itemIndex].quantity += 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Item has been added to cart!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },

    removeFromCart: (state, action) => {
      const itemIndex = state.value.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      if (itemIndex !== -1) {
        if (state.value[itemIndex].quantity > 1) {
          state.value[itemIndex].quantity -= 1;
        } else {
          state.value = state.value.filter(
            (item) =>
              !(
                item.id === action.payload.id &&
                item.size === action.payload.size
              ),
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Item has been removed from cart!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },

    clearCart: (state) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Cart has been cleared!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
