import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice.jsx";

export default configureStore({
  reducer: {
    cart: CartReducer,
  },
});
