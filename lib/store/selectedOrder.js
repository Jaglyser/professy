import { createSlice } from "@reduxjs/toolkit";

const selectedOrderSlice = createSlice({
  name: "selectedOrder",
  initialState: { selectedOrders: "Start" },
  reducers: {
    set(state, action) {
      const newSelectedOrder = action.payload;

      state.selectedOrders = newSelectedOrder.updatedSelectedOrder;
    },
  },
});

export const selectedOrderActions = selectedOrderSlice.actions;

export default selectedOrderSlice;
