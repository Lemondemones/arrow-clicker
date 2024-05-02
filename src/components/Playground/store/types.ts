export type PlaygroundStepsState = {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
};

export type PlaygroundState = {
  currentStep: number;
  steps: PlaygroundStepsState[];
};
