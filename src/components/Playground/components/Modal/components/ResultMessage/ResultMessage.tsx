import TypographyText from "../../../../../UI/TypographyText";
import styles from "./ResultMessage.module.css";

export type typeResultMessageProps = {
  isSuccessEndGame: boolean;
};

export default function ResultMessage({ isSuccessEndGame }: typeResultMessageProps) {
  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congratulations! <br /> You win
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My regrets! <br /> You have lost this game
        </TypographyText>
      )}
    </div>
  );
}
