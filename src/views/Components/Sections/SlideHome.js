import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const useStyles = makeStyles(styles);

const BigBlue = styled.div`
  color: #fff;
  background-image: -webkit-linear-gradient(-45deg, #005aaa70 65%, #ffffff00 72%);
  text-align: right;
  padding-right: 25px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
  display: flex;
  height: 250px;
  max-width: 70%;
`;

const SliderWrapper = styled.div`
  max-width: 300px;
  margin-top: 30px;
`;

const KnowMoreWrapper = styled.div`
  margin-left: auto;
`;

const KnowMore = styled.div`
  color: #fff;
  background-image: -webkit-linear-gradient(-45deg, #005aaa 75%, #ffffff00 10%);
  text-align: right;
  padding-right: 30px;
  padding-left: 5px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
  cursor: pointer;
`;

const SectionCourses = () => {
  const classes = useStyles();
  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
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
    <Grid container alignItems="center" style={{ height: '60vh' }}>
      <Box className={classes.container}>
        <BigBlue>
          <SliderWrapper>
            <img width="340px" src={require('assets/img/fotoclinicahistoria.png')} alt="courseimg" />
          </SliderWrapper>
          <KnowMoreWrapper>
            <KnowMore onClick={() => history.push('/clinica')}>Leia Mais</KnowMore>
          </KnowMoreWrapper>
        </BigBlue>
      </Box>
    </Grid>
  );
};

export default SectionCourses;
