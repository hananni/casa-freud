import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import { devices } from 'responsive';

const ImageTextContainer = styled.div`
  padding-top: 50px;
  @media ${devices.xs} {
    padding-bottom: 50px;
  }
  @media ${devices.md} {
    ${props => (!props.noPaddingBottom ? `padding-bottom: 50px` : `padding-bottom: 0px`)};
  }
`;

const Description = styled.p`
  text-align: justify;
  margin-top: 20px;
  font-size: 16px;
  color: #777;
`;

const StyledAlign = styled.div`
  margin-right: 20px;
  margin-left: 20px;

  @media ${devices.xs} {
    margin-top: 20px;
  }

  @media ${devices.md} {
    max-width: 492px;
    margin-top: 0px;
    ${props => props.align && `float: ${props.align}`};
  }
`;

const Image = styled.img`
  max-height: 300px;
  object-fit: cover;
  @media ${devices.md} {
    max-height: 380px;
  }
`;

const ImageField = ({ image }) => {
  return (
    <Grid item xs={12} md={6}>
      <Image alt="img" src={image} width="100%" />
    </Grid>
  );
};

const TextField = ({ title, children, rightImage }) => {
  return (
    <Grid item xs={12} md={5}>
      <StyledAlign align={rightImage ? 'right' : 'left'}>
        <TitleFreud soft title={title} />
        <Description>{children}</Description>
      </StyledAlign>
    </Grid>
  );
};

const ImageText = ({ title, image, children, rightImage = false, noPaddingBottom = false }) => {
  return (
    <ImageTextContainer noPaddingBottom={noPaddingBottom}>
      <Grid container direction={rightImage ? 'row-reverse' : 'row'}>
        <ImageField image={image} />
        <TextField title={title} rightImage={rightImage}>
          {children}
        </TextField>
      </Grid>
    </ImageTextContainer>
  );
};

export default ImageText;
