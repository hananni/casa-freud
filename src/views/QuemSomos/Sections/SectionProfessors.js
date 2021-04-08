import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import { PROFESSORS } from 'quem-somos-data';
import CardProfessor from './CardProfessor';

const useStyles = makeStyles(styles);

const SectionProfessors = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <Box mb={4}>
          <TitleFreud soft title="Quadro de Professores" center />
        </Box>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Grid container spacing={3}>
            {PROFESSORS.map(professor => {
              return (
                <Grid item sm={12} md={12} key={professor.title}>
                  <CardProfessor title={professor.title} image={professor.image} instagram={professor.instagram}>
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
