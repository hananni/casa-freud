import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import { PROFISSIONAIS } from 'profissionais-clinica-data';
import CardProfissionais from '../Sections/CardProfissionais';

const useStyles = makeStyles(styles);

const SectionProfissionais = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <Box mb={4}>
          <TitleFreud soft title="Quadro de Profissionais da Clínica" center />
        </Box>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Grid container spacing={3}>
            {PROFISSIONAIS.map(profissionais => {
              return (
                <Grid item sm={12} md={12} key={profissionais.title}>
                  <CardProfissionais
                    title={profissionais.title}
                    subtitle={profissionais.subtitle}
                    image={profissionais.image}
                    instagram={profissionais.instagram}
                  >
                    {profissionais.description}
                  </CardProfissionais>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionProfissionais;
