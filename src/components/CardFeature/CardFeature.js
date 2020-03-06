import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CardFeature({ title, children }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <Typography>{title}</Typography>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
