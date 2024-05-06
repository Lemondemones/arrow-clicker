import { useAppSelector } from "../../../../app/hooks";
import TypographyHeader from "../../../UI/TypographyHeader";
import RandomArrows from "./components/RandomArrows";
import WelcomeText from "./components/WelcomeText";

export type typeRandomKeysProps = {
  isTimerActive: boolean;
};

export default function RandomKeys({ isTimerActive }: typeRandomKeysProps) {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      <TypographyHeader>Random keys</TypographyHeader>
      {state.steps.length === 0 ? <WelcomeText isTimerActive={isTimerActive} /> : <RandomArrows />}
    </div>
  );
}
