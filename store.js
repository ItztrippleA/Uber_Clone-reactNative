import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlices.";

const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

export default store;
