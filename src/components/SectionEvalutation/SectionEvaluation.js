import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Box } from '@material-ui/core';
import CardEvaluation from './CardEvaluation';
import { EVALUATIONS } from 'common-data';
import Carousel from 'react-slick';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  padding: 80px;
  @media (max-width: 700px) {
    padding: 80px 0px;
  }
`;

const useStyles = makeStyles(styles);

const SectionEvaluation = ({ noMarginTop = false }) => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledBox mt={noMarginTop ? 0 : 8} className={classes.freudBg}>
      <Box className={classes.container}>
        <Carousel {...settings}>
          {EVALUATIONS.map(evaluation => {
            return (
              <CardEvaluation key={evaluation.name} name={evaluation.name} grade={evaluation.grade}>
                {evaluation.opinion}
              </CardEvaluation>
            );
          })}
        </Carousel>
      </Box>
    </StyledBox>
  );
};

export default SectionEvaluation;
