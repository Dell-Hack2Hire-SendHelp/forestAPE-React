import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PlantState {
  value: number;
}

// Define the initial state using that type
const initialState: PlantState = {
  value: 0,
};

export const plantationSlice = createSlice({
  name: "plantation",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<4>) => {
    //   state.value += action.payload;
    // },
    updateValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } =
  plantationSlice.actions;
export default plantationSlice.reducer;
