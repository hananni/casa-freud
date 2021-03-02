import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box, Typography } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import { BOOKS } from 'servicos-oferecidos-data';

const useStyles = makeStyles(styles);

const SectionLibrary = () => {
  const classes = useStyles();

  return (
    <Box pt={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Box p={2} style={{ backgroundColor: '#052b5c' }}>
            <TitleFreud title="Biblioteca virtual" center color="#fff" />
            <Typography align="center" style={{ color: '#fff' }}>
              É simplesmente uma simulação de texto da indústria tipográfica e de impressos
            </Typography>
          </Box>
          <Box style={{ backgroundColor: '#0c1536 ' }} p={10}>
            <Grid container spacing={5} justify="center" align-items="center">
              {BOOKS.map((book, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={`book${index}`}>
                    <Box align="center">
                      <img src={book.image} style={{ margin: 'auto' }} alt="book" />
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default SectionLibrary;
