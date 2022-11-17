import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: "popUp",
  initialState: { popUp: false },
  reducers: {
    setValue(state, action) {
      state.popUp = !state.popUp
    },
  },
});

export const popUpActions = popUpSlice.actions;

export default popUpSlice;
