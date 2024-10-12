// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice.js"; // Example slice
import sideBarReducer from "./features/sideBarSlice.js";
import utilsReducer from "./features/utilsSlice.js";
import { PRODUCTION } from "../utils/constants.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sideBarReducer,
    utils: utilsReducer,
  },
  devTools: PRODUCTION !== true,
  
});

export default store;
