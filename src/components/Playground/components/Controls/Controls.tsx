import Button from "../../../UI/Button/Button";

import { PlayArrow, Pause } from "@mui/icons-material";

import styles from "./Controls.module.css";

export type ControlsProps = {
  isTimerActive: boolean;
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Controls({ isTimerActive, setIsTimerActive }: ControlsProps) {
  const handlePlay = () => setIsTimerActive(true);
  const handlePause = () => setIsTimerActive(false);
  return (
    <div>
      <Button onClick={handlePlay} disabled={isTimerActive} className={styles.button} endIcon={<PlayArrow />}>
        Play
      </Button>
      <Button onClick={handlePause} disabled={!isTimerActive} className={styles.button} endIcon={<Pause />}>
        Pause
      </Button>
    </div>
  );
}
