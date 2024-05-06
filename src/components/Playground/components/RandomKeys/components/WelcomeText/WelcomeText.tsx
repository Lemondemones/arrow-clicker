import TypographyText from "../../../../../UI/TypographyText";
import loader from "./img/loader.svg";

import styles from "./WelcomeText.module.css";
import stylesCommmon from "../../RandomKeys.module.css";

export type typeWelcomeTextProps = {
  isTimerActive: boolean;
};

export default function WelcomeText({ isTimerActive }: typeWelcomeTextProps) {
  if (isTimerActive) {
    return (
      <div className={stylesCommmon.wrapper}>
        <span className={stylesCommmon.icon}>
          <img className={styles.loader} src={loader} alt="Loader" />
        </span>
      </div>
    );
  }

  return <TypographyText>Press "Play" to start the game</TypographyText>;
}
