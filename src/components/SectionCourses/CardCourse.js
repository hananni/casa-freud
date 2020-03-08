import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function CardCourse({ image, title, link, children }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img src={image} width="100%" />
      <div className={classes.body}>
        <Typography className={classes.title}>{title}</Typography>
        {children} <span className={classes.readmore}>LEIA MAIS</span>
      </div>
    </div>
  );
}
