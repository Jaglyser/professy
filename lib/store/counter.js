import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    set(state, action) {
      state.counter = action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;