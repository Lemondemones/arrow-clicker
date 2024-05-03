import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useRef, useState } from "react";

import Controls from "./components/Controls";
import RandomKeys from "./components/RandomKeys";
import KeyPressed from "./components/KeyPressed";

import { setCurrentStep, setSteps, setUnsuccess } from "./store/slices";
import { INTERVAL_TIME, END_GAME_CONDITION } from "./constants";
import Score from "./components/Score";
import Modal from "./components/Modal";

export default function Playground() {
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false);

  const refreshTimerID = useRef<ReturnType<typeof setInterval> | null>(null);

  const state = useAppSelector((state) => state.playground);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isTimerActive) {
      refreshTimerID.current = setInterval(() => {
        dispatch(setUnsuccess());
        dispatch(setCurrentStep());
        dispatch(setSteps());
      }, INTERVAL_TIME);
    } else {
      clearInterval(refreshTimerID.current as NodeJS.Timeout);
    }

    return () => clearInterval(refreshTimerID.current as NodeJS.Timeout);
  }, [isTimerActive, dispatch]);

  useEffect(() => {
    const isSuccessful = state.totalSuccessful === END_GAME_CONDITION.SUCCESS_COUNT;
    const isUnsuccessful = state.totalUnsuccessful === END_GAME_CONDITION.UNSUCCESS_COUNT;

    isSuccessful && setIsSuccessEndGame(true);
    isUnsuccessful && setIsSuccessEndGame(false);

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true);
      setIsTimerActive(false);
    }
  }, [state.totalSuccessful, state.totalUnsuccessful]);

  return (
    <div>
      {state.currentStep}
      <Controls isTimerActive={isTimerActive} setIsTimerActive={setIsTimerActive} />
      <RandomKeys isTimerActive={isTimerActive} />
      <KeyPressed isTimerActive={isTimerActive} />
      <Score />
      {isShowModal && <Modal setIsShowModal={setIsShowModal} isSuccessEndGame={isSuccessEndGame} />}
    </div>
  );
}
