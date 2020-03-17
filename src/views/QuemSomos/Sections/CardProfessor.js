import React from "react";
import styled from "styled-components";
import { Box, Grid, Typography } from "@material-ui/core";

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const KnowMore = styled.div`
  color: #fff;
  background-image: -webkit-linear-gradient(-45deg, #3636de 90%, #ffffff00 10%);
  text-align: right;
  padding-right: 25px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
`;

const CustomIcon = styled.i`
  padding: 0px 5px 0 5px;
  font-size: 18px;
  color: #3636de;
  text-align: right;
  cursor: pointer;
`;

const CardProfessor = ({ image, title, children, whatsapp, instagram }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={4}>
          <img src={image} width="100%" />
        </Grid>
        <Grid item xs={8} style={{ position: "relative" }}>
          <Box p={3}>
            <Title>{title}</Title>
            <Box mt={2}>{children}</Box>
          </Box>
          <Grid container style={{ position: "absolute", bottom: 0 }}>
            <Grid item xs={8}>
              <KnowMore>SAIBA MAIS</KnowMore>
            </Grid>
            <Grid item xs={4}>
              <Typography align="right">
                <CustomIcon href={instagram} className={" fab fa-instagram"} />
                <CustomIcon href={whatsapp} className={" fab fa-whatsapp"} />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardProfessor;
