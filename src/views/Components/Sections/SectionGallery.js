import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-grid-gallery";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid, Box } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";
import { IMAGES } from "common-data";

const useStyles = makeStyles(styles);

export default function SectionGallery() {
  const classes = useStyles();

  return (
    <Box mt={8} mb={8}>
      <div className={classes.section}>
        <Box mb={4}>
          <TitleFreud title="Galeria" center />
        </Box>
        <div className={classes.container} style={{ display: "grid" }}>
          <Gallery enableImageSelection={false} images={IMAGES} />
        </div>
      </div>
    </Box>
  );
}
