import { combineSlices, configureStore } from "@reduxjs/toolkit";

const initialState = {
  _id: Date.now(),
  productName: "OPPO K-10",
  productPrice: 18000,
  productImageUrl:
    "https://www.google.com/imgres?q=oppo%20k10&imgurl=https%3A%2F%2Fmehtaagency.com%2Fpub%2Fmedia%2Fcatalog%2Fproduct%2Fo%2Fp%2Foppo_k10_1_.jpg&imgrefurl=https%3A%2F%2Fmehtaagency.com%2Fcatalog%2Fproduct%2Fview%2Fid%2F3525%2Fs%2Foppo-k10-8gb-128gb-black%2Fcategory%2F21%2F&docid=i16M7tar6GQ4fM&tbnid=z0EB9zkw72oZ7M&vet=12ahUKEwjQ597AlZ2IAxWjRmcHHf3JJ6UQM3oECBcQAA..i&w=840&h=868&hcb=2&ved=2ahUKEwjQ597AlZ2IAxWjRmcHHf3JJ6UQM3oECBcQAA",
};

export const ProductSlice = configureStore({
  name: "product",
  initialState,
  reducer: {
    changeProductPrice: (state, action) => {
      console.log(state.productName);
    },
  },
});

export const { changeProductPrice } = ProductSlice.actions;
export default ProductSlice.reducer;
