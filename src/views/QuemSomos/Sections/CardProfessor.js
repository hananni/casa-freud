import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import { devices } from 'responsive';

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
  background-image: -webkit-linear-gradient(-45deg, #005aaa 90%, #ffffff00 10%);
  text-align: right;
  padding-right: 50px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
`;

const CustomIcon = styled.i`
  padding: 5px;
  font-size: 18px;
  color: #fff;
  text-align: right;
  cursor: pointer;
`;

const ProfessorPhoto = styled.img`
  max-height: 315px;
  @media ${devices.md} {
    width: 100%;
  }
  @media ${devices.xs} {
    max-width: 300px;
  }
  display: block;
  margin: auto;
`;

const CardProfessor = ({ image, title, children, whatsapp, instagram }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} md={3}>
          <ProfessorPhoto alt={title} src={image} />
        </Grid>
        <Grid item xs={12} md={9} style={{ position: 'relative' }}>
          <Box p={3}>
            <Title>{title}</Title>
            <Box mt={2}>{children}</Box>
          </Box>
          <Grid container style={{ position: 'absolute', bottom: 0 }}>
            <Grid item xs={8}>
              <KnowMore>
                <CustomIcon href={instagram} className={' fab fa-instagram'} />
              </KnowMore>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardProfessor;
