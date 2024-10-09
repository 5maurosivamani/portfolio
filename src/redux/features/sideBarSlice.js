import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: false,
  },
  reducers: {
    toggleIsOpen: (state) => {
      state.value = !state.value;
    },
    setIsOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleIsOpen, setIsOpen } = sideBarSlice.actions;
export default sideBarSlice.reducer;
