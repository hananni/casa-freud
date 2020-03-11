import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid, Box } from "@material-ui/core";
import CardEvaluation from "./CardEvaluation";
import { EVALUATIONS } from "data";

const useStyles = makeStyles(styles);

const SectionEvaluation = () => {
  const classes = useStyles();

  return (
    <Box mt={8} p={10} className={classes.freudBg}>
      <Box className={classes.container}>
        <Grid container spacing={4}>
          {EVALUATIONS.map(evaluation => {
            return (
              <Grid item key={evaluation.name} xs={12} sm={6}>
                <CardEvaluation name={evaluation.name} grade={evaluation.grade}>
                  {evaluation.opinion}
                </CardEvaluation>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionEvaluation;
