import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './cardStyle.js';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { devices } from 'responsive.js';

const useStyles = makeStyles(styles);

const HeaderFeature = styled.div`
  background-color: #0c1536;

  color: #fff;
  font-weight: 800;
  padding: 10px;

  @media ${devices.md} {
    background-color: #1667b147;
  }
`;

export default function CardFeature({ title, children }) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <HeaderFeature>
        <Typography>{title}</Typography>
      </HeaderFeature>
      <div className={classes.body}>{children}</div>
    </div>
  );
}
