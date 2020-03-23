import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Typography, Box, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  font-style: italic;
`;

const Breadcrumbs = styled.p`
  color: #005aaa;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  margin-top: 20px;
`;

const Icon = styled(ArrowForwardIcon)`
  display: inline-flex;
  vertical-align: top;
`;

// core components
// const useStyles = makeStyles(styles);

const TitlePage = ({ title }) => {
  // const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title>{title}</Title>
        <Breadcrumbs>
          Home <Icon /> {title}
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default TitlePage;
