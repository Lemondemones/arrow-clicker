import { useAppSelector } from "../../../../app/hooks";
import RandomArrows from "./components/RandomArrows";
import WelcomeText from "./components/WelcomeText";

export type typeRandomKeysProps = {
  isTimerActive: boolean;
};

export default function RandomKeys({ isTimerActive }: typeRandomKeysProps) {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      {state.steps.length === 0 ? <WelcomeText isTimerActive={isTimerActive} /> : <RandomArrows />}
    </div>
  );
}
