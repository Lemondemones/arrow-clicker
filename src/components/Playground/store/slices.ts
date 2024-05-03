import { createSlice } from "@reduxjs/toolkit";
import type { PlaygroundState } from "./types";
import { ARR_ARROW_TREE } from "../constants";

export const initialState: PlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnsuccessful: 0,
};

export const playgroudSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1;
    },

    setSteps: (state) => {
      const randomKeys: number = Math.floor(Math.random() * ARR_ARROW_TREE.length);
      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_TREE[randomKeys],
        enteredValue: null,
        success: null,
      });
    },

    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];
        const isSuccess = step.currentValue === action.payload;

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          };
        }

        if (isSuccess) {
          state.totalSuccessful += 1;
        } else {
          state.totalUnsuccessful += 1;
          state.totalSuccessful = 0;
        }
      }
    },

    setUnsuccess: (state) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1];
        if (step.enteredValue == null) {
          state.totalUnsuccessful += 1;
          state.totalSuccessful = 0;
          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          };
        }
      }
    },

    resetStore: () => initialState,
  },
});

export const { setCurrentStep, setSteps, setEnteredValue, setUnsuccess, resetStore } =
  playgroudSlice.actions;
export default playgroudSlice.reducer;
