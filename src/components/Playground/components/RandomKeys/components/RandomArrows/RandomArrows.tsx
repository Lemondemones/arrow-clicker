import { useAppSelector } from "../../../../../../app/hooks";

import styles from "../RandomArrows/RandomArrows.module.css";
import { ARROW_TREE } from "../../../../constants";

import type { PlaygroundStepsState } from "../../../../store/types";
import type { TArrows } from "../../../../types";

export default function RandomArrows() {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (elem: PlaygroundStepsState): string => {
    if (elem.success && elem.success !== null) {
      return styles.iconSuccess;
    }

    if (!elem.success && elem.success !== null) {
      return styles.iconUnsuccess;
    }

    return styles.icon;
  };

  return (
    <div>
      {state.steps.map((elem) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {ARROW_TREE[elem.currentValue as keyof TArrows]}
        </span>
      ))}
    </div>
  );
}
