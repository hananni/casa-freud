import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box, Typography } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import CardService from './CardService';
import { INTRO_TEXT } from 'servicos-oferecidos-data';
import { SERVICES } from 'servicos-oferecidos-data';

const useStyles = makeStyles(styles);

const SectionServices = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Box m={4} mb={5}>
            <Typography align="center">{INTRO_TEXT}</Typography>
          </Box>
          <Box mb={4}>
            <TitleFreud title="Cursos e Formações" center />
          </Box>
          <Grid container spacing={5} alignItems="stretch">
            {SERVICES.map(service => {
              return (
                <Grid item xs={12} md={4} key={service.title}>
                  <CardService title={service.title} image={service.image}>
                    {service.description}
                  </CardService>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionServices;
