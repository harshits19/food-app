import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restroSlice from "./restroSlice";

const reduxStore = configureStore({
  reducer: {
    cart: cartSlice,
    restro: restroSlice,
  },
});

export default reduxStore;
