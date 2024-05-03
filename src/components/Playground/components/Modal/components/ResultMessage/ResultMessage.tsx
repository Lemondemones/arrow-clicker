export type typeResultMessageProps = {
  isSuccessEndGame: boolean;
};

export default function ResultMessage({ isSuccessEndGame }: typeResultMessageProps) {
  return isSuccessEndGame ? (
    <span>
      Congratulations! <br /> You win
    </span>
  ) : (
    <span>
      My regrets! <br /> You have lost this game
    </span>
  );
}
