import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Typography, Box, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const Title = styled.p`
  color: #000;
  font-size: 40px;
  font-weight: 400;
`;
const Description = styled.p`
  text-align: justify;
  margin-top: 20px;
  font-size: 16px;
`;
// core components
// const useStyles = makeStyles(styles);
const ImageField = ({ image }) => {
  return (
    <Grid item xs={12} md={6}>
      <img src={image} width="100%"></img>
    </Grid>
  );
};

const TextField = ({ title, children }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box ml={3} mr={3}>
        <Title>{title}</Title>
        <Description>{children}</Description>
      </Box>
    </Grid>
  );
};

const ImageText = ({ title, image, children, rightImage = false }) => {
  // const classes = useStyles();
  return (
    <Box pt={10} pb={10}>
      <Grid container justify={!rightImage ? "flex-start" : "flex-end"}>
        {!rightImage ? (
          <ImageField image={image} />
        ) : (
          <TextField title={title}>{children} </TextField>
        )}

        {!rightImage ? (
          <TextField title={title}>{children} </TextField>
        ) : (
          <ImageField image={image} />
        )}
      </Grid>
    </Box>
  );
};

export default ImageText;
