import { createSlice } from "@reduxjs/toolkit";

const MainOrderSlice = createSlice({
  name: "mainOrder",
  initialState: { mainOrder: 12345 },
  reducers: {
    set(state, action) {
      const newMainOrder = action.payload;

      state.mainOrder = newMainOrder.updatedMainOrder;
    },
  },
});

export const MainOrderActions = MainOrderSlice.actions;

export default MainOrderSlice;
