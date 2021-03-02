import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Box, Typography } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
//import { ACTIVITIES } from 'agenda-data';
//import CardActivity from './CardActivity';
const useStyles = makeStyles(styles);

const SectionActivities = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Box m={4}>
            <TitleFreud title="Em breve" center />
          </Box>
          <Box mb={5}>
            <Typography align="center"></Typography>
          </Box>
          {/*<Grid container spacing={2}>
            {ACTIVITIES.map(activity => {
              return (
                <Grid item xs={12} key={activity.title}>
                  <CardActivity {...activity} />
                </Grid>
              );
            })}
          </Grid>*/}
        </div>
      </div>
    </Box>
  );
};

export default SectionActivities;
