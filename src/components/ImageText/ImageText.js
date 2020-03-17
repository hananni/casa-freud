import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Box, Grid } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";

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
        <TitleFreud soft title={title} />
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
