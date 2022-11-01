import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { filters: [] },
  reducers: {
    addFilter(state, action) {
      const newFilter = action.payload;
      const existingFilters = state.filters.find(
        (item) => item.Category === newFilter.value
      );
      if (!existingFilters) {
        state.filters.push({
          Category: newFilter.value,
        });
      }
    },
    removeFilter(state, action) {
      const removeFilter = action.payload;
      const existingFilters = state.filters.find(
        (item) => item.Category === removeFilter.value
      );
      if (existingFilters) {
        state.filters = state.filters.filter(
          (item) => item.Category !== removeFilter.value
        );
      }
    },
  },
});


export const filtersActions = filtersSlice.actions;
export default filtersSlice;
