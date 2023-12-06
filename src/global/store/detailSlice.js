import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {}, // change 'content' to 'value'
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

console.log(contentUpdate, "넘겨받음");
