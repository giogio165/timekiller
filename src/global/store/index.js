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

const rootReducer = combineReducers({
  search: searchSlice.reducer,
  contentUpdate: detailSlice.reducer,
  keep: keepSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["searchSlice", "detailSlice", "keepSlice"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
