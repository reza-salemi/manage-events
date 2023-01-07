import classes from "./logistics-item.module.css";

export const LogisticsItem = (props: any) => {
  const { icon: Icon } = props;
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};
