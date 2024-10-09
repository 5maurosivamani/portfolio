// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice.js"; // Example slice

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
