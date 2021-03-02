import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import facade from 'assets/img/facade.JPG';
import styled from 'styled-components';

const useStyles = makeStyles(styles);

const WhiteField = styled.div`
  background-color: #fff
  padding: 40px;
  text-align: center;
`;

const SectionContato = () => {
  const classes = useStyles();

  return (
    <Box pt={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Grid container>
            <Grid item xs={12}>
              <img alt="contato" src={facade} width="100%" />
            </Grid>
            <Grid item xs={12}>
              <WhiteField>
                <Box mt={10}>
                  <TitleFreud title="FORM" center marginBottom="25px" />É simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos. É simplesmente uma simulação de texto da indústria tipográfica e
                  de impressos. É simplesmente uma simulação de texto
                </Box>
              </WhiteField>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionContato;
