import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  library: [],
};

const keepSlice = createSlice({
  name: "keep_contents",
  initialState,
  reducers: {
    keep: (state, action) => {
      state.library = [...state.library, action.payload];
    },
  },
});

export default keepSlice;
export const { keep } = keepSlice.actions;
