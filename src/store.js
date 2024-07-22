import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./roootReducers";

const store = configureStore({
  reducer: rootReducers,
});

export default store;
