// src/features/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: "dark", // Default theme is light
  },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
    setTheme: (state, action) => {
      state.value = action.payload; // Directly set theme
    },
  },
});

export const selectTheme = (state) => state.value;

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
