import { createSlice, current } from '@reduxjs/toolkit';

const pageViewSlice = createSlice({
  name: 'pageView',
  initialState: { pageViews: "Start" },
  reducers: {
    set(state, action) {
      const newPageView = action.payload;

      state.pageViews = newPageView.updatedPageView
  },
}});


export const pageViewActions = pageViewSlice.actions;

export default pageViewSlice;