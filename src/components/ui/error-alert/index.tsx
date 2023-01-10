import classes from "./error-alert.module.css";
import { ErrorAlertProp } from "./type";

export const ErrorAlert = (props: ErrorAlertProp) => (
  <div className={classes.alert}>{props.children}</div>
);
