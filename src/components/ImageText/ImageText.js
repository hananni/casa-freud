import React from 'react';
import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';

const Description = styled.p`
  text-align: justify;
  margin-top: 20px;
  font-size: 16px;
`;

const StyledAlign = styled.div`
  margin-right: 20px;
  margin-left: 20px;
  @media (min-width: 576px) {
    padding: 40px;
  }
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 960px) {
    padding: 0px;
    ${props => props.align && `padding-${props.align}: 35px`};
  }
  @media (min-width: 1200px) {
    padding: 0px;
    ${props => props.align && `padding-${props.align}: 100px`};
  }
`;

const ImageField = ({ image }) => {
  return (
    <Grid item xs={12} md={6}>
      <img alt="img" src={image} width="100%"></img>
    </Grid>
  );
};

const TextField = ({ title, children, rightImage }) => {
  return (
    <Grid item xs={12} md={5}>
      <StyledAlign align={!rightImage ? 'right' : 'left'}>
        <TitleFreud soft title={title} />
        <Description>{children}</Description>
      </StyledAlign>
    </Grid>
  );
};

const ImageText = ({ title, image, children, rightImage = false, noPaddingBottom = false }) => {
  return (
    <Box pt={10} pb={noPaddingBottom ? 0 : 10}>
      <Grid container direction={rightImage ? 'row-reverse' : 'row'}>
        <ImageField image={image} />
        <TextField title={title} rightImage={rightImage}>
          {children}{' '}
        </TextField>
      </Grid>
    </Box>
  );
};

export default ImageText;
