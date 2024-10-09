// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice.js"; // Example slice
import sideBarReducer from "./features/sideBarSlice.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sideBarReducer
  },
});

export default store;
