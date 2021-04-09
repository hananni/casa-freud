import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import styles from './cardStyle.js';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(styles);

export default function CardCourse({ image, title, link, children }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.card}>
      <img src={image} width="100%" alt={title} />
      <div className={classes.body}>
        <Typography className={classes.title}>{title}</Typography>
        {children}
        <span className={classes.readmore} onClick={() => history.push(link)}>
          LEIA MAIS
        </span>
      </div>
    </div>
  );
}
