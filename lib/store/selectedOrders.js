import { createSlice } from "@reduxjs/toolkit";

const selectedOrdersSlice = createSlice({
  name: "selectedOrders",
  initialState: { selectedOrders: [] },
  reducers: {
    addFilter(state, action) {
      const newSelectedOrder = action.payload;
      const selectedOrders = state.selectedOrders.find(
        (item) => item.orders === newSelectedOrder.value
      );
      if (!selectedOrders) {
        state.selectedOrders.push({
          orders: newSelectedOrder.value,
        });
      }
    },
    removeFilter(state, action) {
      const removeOrder = action.payload;
      const selectedOrders = state.selectedOrders.find(
        (item) => item.orders === removeOrder.value
      );
      if (selectedOrders) {
        state.selectedOrders = state.selectedOrders.filter(
          (item) => item.orders !== removeOrder.value
        );
      }
    },
  },
});

export const selectedOrdersActions = selectedOrdersSlice.actions;

export default selectedOrdersSlice;
