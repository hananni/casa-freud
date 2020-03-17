import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import CardFeature from "../CardFeature/CardFeature";
import { Grid, Box } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";
import CardCourse from "./CardCourse";
import { COURSES } from "common-data";

const useStyles = makeStyles(styles);

const SectionCourses = () => {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.container}>
      <Box mb={4}>
        <TitleFreud title="Cursos Oferecidos" center />
      </Box>
      <Grid container spacing={1}>
        {COURSES.map(course => {
          return (
            <Grid key={course.title} item xs={12} sm={4}>
              <CardCourse title={course.title} image={course.image}>
                {course.description}
              </CardCourse>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SectionCourses;
