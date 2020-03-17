import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Gallery from "react-grid-gallery";
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid, Box } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";
import { IMAGES } from "common-data";
import { PROFESSORS } from "quem-somos-data";
import CardProfessor from "./CardProfessor";

const useStyles = makeStyles(styles);

const SectionProfessors = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <Box mb={4}>
          <TitleFreud soft title="Quadro de Professores" center />
        </Box>
        <div className={classes.container} style={{ display: "grid" }}>
          <Grid container spacing={5}>
            {PROFESSORS.map(professor => {
              return (
                <Grid item xs={12} md={6} key={professor.title}>
                  <CardProfessor
                    title={professor.title}
                    image={professor.image}
                  >
                    {professor.description}
                  </CardProfessor>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionProfessors;
