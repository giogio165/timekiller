import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import detailSlice from "./detailSlice";

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    contentUpdate: detailSlice.reducer,
  },
});

export default store;
