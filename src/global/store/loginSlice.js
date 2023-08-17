import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

const loginSlice = createSlice({
  name: "is_login",
  initialState,
  reducers: {
    isLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export default loginSlice;
export const { isLogin } = loginSlice.actions;
