import type { ButtonProps } from "@mui/material";
import { Button as MaterialButton } from "@mui/material";
import cn from "classnames";

import styles from "./Button.module.css";

export interface IButtonProps extends ButtonProps {}

export default function Button(props: IButtonProps) {
  return (
    <MaterialButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, props.className)}>
      {props.children}
    </MaterialButton>
  );
}
