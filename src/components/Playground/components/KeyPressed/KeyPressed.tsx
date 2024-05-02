import { useEffect, useCallback } from "react";
import { ARROW_TREE } from "../../constants";
import { useAppDispatch } from "../../../../app/hooks";
import { setEnteredValue } from "../../store/slices";
import { useKeyPressedElement } from "./hooks";

export type typeKeyPressedProps = {
  isTimerActive: boolean;
};

export default function KeyPressed({ isTimerActive }: typeKeyPressedProps) {
  const dispatch = useAppDispatch();
  const keyPressedElem = useKeyPressedElement();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (Object.prototype.hasOwnProperty.call(ARROW_TREE, e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [dispatch, isTimerActive]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
  return (
    <div>
      <h3>Key Pressed</h3>
      <span>{keyPressedElem}</span>
    </div>
  );
}
