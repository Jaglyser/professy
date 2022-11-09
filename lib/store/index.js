import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import pageViewSlice from './pageView'
import filtersSlice from './filters'
import MainOrderSlice from './mainOrder'
import selectedOrderSlice from './selectedOrders';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pageView: pageViewSlice.reducer,
    filters: filtersSlice.reducer,
    selectedOrder: selectedOrderSlice.reducer,
    mainOrder: MainOrderSlice.reducer,
  },
});