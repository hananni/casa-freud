import React from "react";
import styled from "styled-components";
import { Box, Grid, Typography } from "@material-ui/core";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  color: #000;
`;

const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-style: italic;
  color: #000;
`;

const DateTime = styled.div`
  color: #fff;
  background-color: #005aaa
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  padding: 10px;
`;

const Description = styled.div`
  padding: 10px;
  font-size: 14px;
  color: #979797;
`;

const CardActivity = ({ image, title, subtitle, description, date }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <img src={image} width="100%" />
        </Grid>
        <Grid item xs={12} sm={5} style={{ position: "relative" }}>
          <Box p={3}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
            <Description>{description}</Description>
          </Box>
          <Grid container style={{ position: "absolute", bottom: 0 }}>
            <Grid item xs={12}>
              <DateTime>{date}</DateTime>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardActivity;
