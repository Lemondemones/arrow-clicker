import { Typography as MaterialTypography, TypographyProps as MaterialTypographyProps } from "@mui/material";
import cn from "classnames";
import styles from "./TypographyHeader.module.css";

export interface ITypographyProps extends MaterialTypographyProps {}

export default function TypographyHeader(props: ITypographyProps) {
  return (
    <MaterialTypography variant="h3" {...props} className={cn(styles.text, props.className)}>
      {props.children}
    </MaterialTypography>
  );
}
