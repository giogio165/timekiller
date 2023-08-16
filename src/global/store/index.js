import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchSlice from "./searchSlice";
import detailSlice from "./detailSlice";
import keepSlice from "./keepSlice";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  contentUpdate: detailSlice.reducer,
  keep: keepSlice.reducer,
});

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["searchSlice", "detailSlice", "keepSlice"],
// };

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    contentUpdate: detailSlice.reducer,
    keep: keepSlice.reducer,
  },
});

export default store;
