import { Chip, Stack } from "@mui/material";
import { useAppSelector } from "../../../../app/hooks";
import TypographyHeader from "../../../UI/TypographyHeader";
import TypographyText from "../../../UI/TypographyText";

import styles from "./Score.module.css";

export default function Score() {
  const state = useAppSelector((state) => state.playground);

  return (
    <div>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText> On error, the "Consecutive successful hits" value is reset to zero</TypographyText>

      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Errors: <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          variant="outlined"
        />
        <Chip
          className={styles.chipSuccess}
          label={
            <>
              Successful: <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          variant="outlined"
        />
      </Stack>

      <span>Successful: {state.totalSuccessful}</span>
    </div>
  );
}
