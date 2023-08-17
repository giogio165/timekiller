import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import searchSlice from "./searchSlice";
import detailSlice from "./detailSlice";
import keepSlice from "./keepSlice";
import loginSlice from "./loginSlice";

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  contentUpdate: detailSlice.reducer,
  keep: keepSlice.reducer,
  isLogin: loginSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["searchSlice", "detailSlice", "keepSlice", "loginSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
