import { useAppSelector } from "../../../../../../app/hooks";
import cn from "classnames";

import styles from "../RandomArrows/RandomArrows.module.css";
import stylesCommmon from "../../RandomKeys.module.css";
import { ARROW_TREE } from "../../../../constants";

import type { PlaygroundStepsState } from "../../../../store/types";
import type { TArrows } from "../../../../types";

export default function RandomArrows() {
  const state = useAppSelector((state) => state.playground);

  const getStylesRandomKeys = (elem: PlaygroundStepsState): string => {
    return cn(
      elem.success && elem.success !== null && styles.iconSuccess,
      !elem.success && elem.success !== null && styles.iconUnsuccess,
      stylesCommmon.icon
    );
  };

  return (
    <div className={stylesCommmon.wrapper}>
      {state.steps.map((elem) => (
        <span key={elem.step} className={getStylesRandomKeys(elem)}>
          {ARROW_TREE[elem.currentValue as keyof TArrows]}
        </span>
      ))}
    </div>
  );
}
