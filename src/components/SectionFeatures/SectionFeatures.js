import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import CardFeature from "../CardFeature/CardFeature";
import { Grid } from "@material-ui/core";
import { FEATURES } from "data";

const useStyles = makeStyles(styles);

const SectionFeatures = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container spacing={5}>
        {FEATURES.map(feature => {
          return (
            <Grid item sm={4} key={feature.title}>
              <CardFeature title={feature.title} link={feature.link}>
                {feature.description}
              </CardFeature>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SectionFeatures;
