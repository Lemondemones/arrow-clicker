import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useRef, useState } from "react";

import Controls from "./components/Controls";
import RandomKeys from "./components/RandomKeys";
import KeyPressed from "./components/KeyPressed";

import { setCurrentStep, setSteps } from "./store/slices";
import { INTERVAL_TIME } from "./constants";

export default function Playground() {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const refreshTimerID = useRef<ReturnType<typeof setInterval> | null>(null);

  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isTimerActive) {
      refreshTimerID.current = setInterval(() => {
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      clearInterval(refreshTimerID.current as NodeJS.Timeout);
    }

    return () => clearInterval(refreshTimerID.current as NodeJS.Timeout);
  }, [isTimerActive, dispatch]);

  return (
    <div>
      {state.currentStep}
      <Controls isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
    </div>
  );
}
