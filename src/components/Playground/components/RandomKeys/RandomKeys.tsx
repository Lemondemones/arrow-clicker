import { useAppSelector } from "../../../../app/hooks";
import { ARROW_TREE } from "../../constants";
import type { Arrows } from "../../types";

export type typeRandomKeysProps = {
  isTimerActive: boolean;
};

export default function RandomKeys({ isTimerActive }: typeRandomKeysProps) {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      {state.steps.map((elem) => (
        <span key={elem.step}>{ARROW_TREE[elem.currentValue as keyof Arrows]}</span>
      ))}
    </div>
  );
}
