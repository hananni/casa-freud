import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import CardFeature from '../CardFeature/CardFeature';
import { Grid } from '@material-ui/core';
import { FEATURES } from 'common-data';
import styled from 'styled-components';
import { devices } from 'responsive';

const useStyles = makeStyles(styles);

const StyledGridContainer = styled(Grid)`
  @media ${devices.md} {
    margin: 0px -20px !important;
  }

  @media ${devices.smMax} {
    max-width: 100%;
    margin: 0px !important;
  }

  @media ${devices.xsMax} {
    display: none !important;
  }
`;

const StyledGrid = styled(Grid)`
  width: 100%;
  @media ${devices.smMax} {
    margin-top: 64px !important;
  }
`;

const SectionFeatures = ({ ids = [1, 2, 3] }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <StyledGridContainer container justify="center" spacing={5}>
        {FEATURES.filter(feature => ids.includes(feature.id)).map(feature => {
          return (
            <StyledGrid item md={4} key={feature.title}>
              <CardFeature title={feature.title} link={feature.link}>
                {feature.description}
              </CardFeature>
            </StyledGrid>
          );
        })}
      </StyledGridContainer>
    </div>
  );
};

export default SectionFeatures;
