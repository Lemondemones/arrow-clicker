import { Typography as MaterialTypography, TypographyProps as MaterialTypographyProps } from "@mui/material";
import cn from "classnames";

import styles from "./TypographyText.module.css";

export interface ITypographyProps extends MaterialTypographyProps {}

export default function TypographyText(props: ITypographyProps) {
  return (
    <MaterialTypography {...props} className={cn(styles.text, props.className)}>
      {props.children}
    </MaterialTypography>
  );
}
