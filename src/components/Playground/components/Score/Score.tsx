import { useAppSelector } from "../../../../app/hooks";

export default function Score() {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </div>
  );
}
