import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 100%;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

// const KnowMore = styled.div`
//   width: 80%;
//   color: #fff;
//   background-image: -webkit-linear-gradient(-45deg, #005aaa 90%, #ffffff00 10%);
//   text-align: right;
//   padding-right: 70px;
//   font-size: 13px;
//   font-weight: 500;
//   font-style: italic;
// `;

const CardService = ({ image, title, children, whatsapp, instagram }) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <img alt={title} src={image} width="100%" style={{ maxHeight: '280px' }} />
        </Grid>
        <Grid item xs={12} style={{ position: 'relative' }}>
          <Box p={2}>
            <Title>{title}</Title>
            <Box mt={1}>{children}</Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardService;
