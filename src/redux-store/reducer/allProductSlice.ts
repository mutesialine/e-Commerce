import { createSlice } from "@reduxjs/toolkit";
import { AllProductStateInterface } from "../../interfaces/redux-state/AllProductStateInterface";

const initialState: AllProductStateInterface = {
  products: [],
  isLoading: false,
  isSuccessful: false,
};

export const allProduct = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    getAllProductRequestAction: (state: any) => {
      state.isLoading = true;
    },
    //  getAllProductSuccessAction: (state: any, action: PayloadAction<[]>) => {
    //    state.products = action.payload;
    //    state.isLoading = false;
    //    state.isSuccessful = true;
    //  },
  },
});

export default allProduct.reducer;
