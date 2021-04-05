import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './cardStyle.js';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import { devices } from 'responsive.js';
import { useHistory } from 'react-router-dom';

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

const ReadMore = styled.p`
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
`;

export default function CardFeature({ title, link, children }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.card}>
      <HeaderFeature>
        <Typography>{title}</Typography>
      </HeaderFeature>
      <div className={classes.body}>
        {children}
        <ReadMore onClick={() => history.push(link)}>LEIA MAIS</ReadMore>
      </div>
    </div>
  );
}
