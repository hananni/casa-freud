import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
// @material-ui/icons

// core components
import styles from "./cardStyle.js";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles(styles);

const CardEvaluation = ({ name, grade, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Typography className={classes.title}>
        {name}
        <Box component="span" ml={2}>
          <Rating value={grade} readOnly size="small" />
        </Box>
      </Typography>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default CardEvaluation;
