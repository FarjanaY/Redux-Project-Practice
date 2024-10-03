import { createSlice } from "@reduxjs/toolkit";

//initial State
const initialState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      state[counterIndex].value++;
    },

    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);

      state[counterIndex].value--;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
