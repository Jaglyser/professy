import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import pageViewSlice from './pageView'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    pageView: pageViewSlice.reducer,
  },
})