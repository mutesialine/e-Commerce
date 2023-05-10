import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AllProductStateInterface } from "../../interfaces/redux-state/AllProductStateInterface";
import { ProductInfoInterface } from "../../interfaces/ProductInfointerface";

const initialState: AllProductStateInterface = {
  products: [],
  isLoading: false,
  isSuccessful: false,
};

export const allProduct = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    getAllProductRequestAction: (state) => {
      state.isLoading = true;
    },
    getAllProductSuccessAction: (
      state,
      action: PayloadAction<ProductInfoInterface[]>
    ) => {
      state.products = action.payload;
      state.isLoading = false;
      // state.isSuccessful = true;
    },
  },
});

export const { getAllProductRequestAction, getAllProductSuccessAction } =
  allProduct.actions;

export default allProduct.reducer;
