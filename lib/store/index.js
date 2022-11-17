import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import pageViewSlice from './pageView'
import filtersSlice from './filters'
import MainOrderSlice from './mainOrder'
import popUpSlice from './popUp'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pageView: pageViewSlice.reducer,
    filters: filtersSlice.reducer,
    mainOrder: MainOrderSlice.reducer,
    popUp: popUpSlice.reducer,
  },
});