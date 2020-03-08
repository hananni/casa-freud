import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import CardFeature from "../CardFeature/CardFeature";
import { Grid, Box } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";
import CardCourse from "./CardCourse";

const useStyles = makeStyles(styles);

const courses = [
  {
    title: "Formação em Psicanálise",
    description:
      "É simplesmente uma simulação de texto da indústria tipográfica e de impressos.",
    link: "",
    image:
      "https://meusonhar.com.br/wp-content/uploads/2014/08/sonhar-estudando.jpg"
  },
  {
    title: "Formação em Psicanálise (EAD) ",
    description:
      "É simplesmente uma simulação de texto da indústria tipográfica e de impressos.",
    link: "",
    image:
      "https://meusonhar.com.br/wp-content/uploads/2014/08/sonhar-estudando.jpg"
  },
  {
    title: "Especialização em Psicologia Clínica",
    description:
      "É simplesmente uma simulação de texto da indústria tipográfica e de impressos.",
    link: "",
    image:
      "https://meusonhar.com.br/wp-content/uploads/2014/08/sonhar-estudando.jpg"
  }
];

const SectionCourses = () => {
  const classes = useStyles();

  return (
    <Box mt={8} className={classes.container}>
      <Box mb={4}>
        <TitleFreud title="Cursos Oferecidos" />
      </Box>
      <Grid container spacing={1}>
        {courses.map(course => {
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
