import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import cartSlice from './cart-slice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  },
})