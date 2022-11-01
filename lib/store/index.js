import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import pageViewSlice from './pageView'
import filtersSlice from './filters'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pageView: pageViewSlice.reducer,
    filters: filtersSlice.reducer,
  },
})