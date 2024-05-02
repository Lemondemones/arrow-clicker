import { useAppSelector } from "../../../../app/hooks";
import { ARROW_TREE } from "../../constants";
import type { Arrows } from "../../types";

export const useKeyPressedElement = (): string => {
  const state = useAppSelector((state) => state.playground);

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue;
    if (enteredValue) {
      return ARROW_TREE[enteredValue as keyof Arrows];
    }
  }

  return "⏰";
};
