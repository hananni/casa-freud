import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TitleFreud({ title, children }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.defaultFontStyle + " " + classes.titleFreud}>
          {title}
        </div>
      </Grid>
    </Grid>
  );
}

TitleFreud.propTypes = {
  children: PropTypes.node
};
