import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Box } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import CardCourse from './CardCourse';
import { COURSES } from 'common-data';
import Carousel from 'react-slick';

const useStyles = makeStyles(styles);

const SectionCourses = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    <Box pt={8} className={classes.container}>
      <Box mb={4}>
        <TitleFreud title="Cursos Oferecidos" center />
      </Box>

      <Carousel {...settings}>
        {COURSES.map(course => {
          return (
            <CardCourse title={course.title} image={course.image} key={course.title}>
              {course.description}
            </CardCourse>
          );
        })}
      </Carousel>
    </Box>
  );
};

export default SectionCourses;
