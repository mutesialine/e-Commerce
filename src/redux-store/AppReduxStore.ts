import { configureStore } from "@reduxjs/toolkit";
import allProductReducer from "./reducer/allProductSlice";

const AppReduxStore = configureStore({
  reducer: {
    allProduct: allProductReducer,
  },
});

export type RootState = ReturnType<typeof AppReduxStore.getState>;
export type AppDispatch = typeof AppReduxStore.dispatch;

export default AppReduxStore;
