import { useEffect, useCallback } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { setEnteredValue } from "../../store/slices";
import { useKeyPressedElement } from "./hooks";

import { ARROW_TREE } from "../../constants";

import TypographyHeader from "../../../UI/TypographyHeader";
import TypographyText from "../../../UI/TypographyText";
import styles from "./KeyPressed.module.css";

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
      <TypographyHeader>Key Pressed</TypographyHeader>

      <div className={styles.container}>
        <TypographyText>Press the key corresponding to the key in "Random keys"</TypographyText>

        <div className={styles.wrapper}>
          <span className={styles.icon}>{keyPressedElem}</span>
        </div>
      </div>
    </div>
  );
}
