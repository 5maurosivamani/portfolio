import { createSlice } from "@reduxjs/toolkit";

const utilsSlice = createSlice({
  name: "sidebar",
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    setWindowWidth: (state, action) => {
      state.width = action.payload;
    },
  },
});

export const { setWindowWidth } = utilsSlice.actions;
export default utilsSlice.reducer;
