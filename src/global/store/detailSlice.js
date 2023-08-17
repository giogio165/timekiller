import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: {},
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    contentUpdate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default contentSlice;
export const { contentUpdate } = contentSlice.actions;
