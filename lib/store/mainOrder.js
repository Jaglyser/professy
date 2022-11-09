import { createSlice } from "@reduxjs/toolkit";

const MainOrderSlice = createSlice({
  name: "mainOrder",
  initialState: { mainOrder: "order1" },
  reducers: {
    set(state, action) {
      const newMainOrder = action.payload;

      state.mainOrder = newMainOrder.updatedMainOrder;
    },
  },
});

export const MainOrderActions = MainOrderSlice.actions;

export default MainOrderSlice;