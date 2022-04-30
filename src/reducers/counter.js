import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    count: 0,
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state) => {
      state.count += state.value;
    },
    decrementByAmount: (state) => {
      state.count -= state.value;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  handleChange,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = slice.actions;

export default slice.reducer;
