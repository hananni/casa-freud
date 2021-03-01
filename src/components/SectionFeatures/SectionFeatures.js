import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import CardFeature from '../CardFeature/CardFeature';
import { Grid } from '@material-ui/core';
import { FEATURES } from 'common-data';
import styled from 'styled-components';
import { devices } from 'responsive';

const useStyles = makeStyles(styles);

const StyledGrid = styled(Grid)`
  @media ${devices.xs} {
    padding-top: 64px;
  }

  @media ${devices.md} {
    padding: 20px;
  }
`;

const SectionFeatures = ({ ids = [1, 2, 3] }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justify="center" spacing={5} style={{ margin: '0px -20px' }}>
        {FEATURES.filter(feature => ids.includes(feature.id)).map(feature => {
          return (
            <StyledGrid item md={4} key={feature.title}>
              <CardFeature title={feature.title} link={feature.link}>
                {feature.description}
              </CardFeature>
            </StyledGrid>
          );
        })}
      </Grid>
    </div>
  );
};

export default SectionFeatures;
