import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const Title = styled.p`
  color: ${props => props.color};
  font-style: ${props => props.fontStyle};
  font-size: 35px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  font-weight: ${props => (props.soft ? '400' : '600')};

  text-align: ${props => (props.center ? 'center' : props.right ? 'right' : 'left')};
`;

export default function TitleFreud({
  title,
  children,
  soft,
  center,
  right,
  color = '#000',
  marginBottom,
  fontStyle = 'normal',
}) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title
          soft={soft}
          center={center}
          color={color}
          fontStyle={fontStyle}
          right={right}
          marginBottom={marginBottom}
        >
          {title}
        </Title>
      </Grid>
    </Grid>
  );
}

TitleFreud.propTypes = {
  children: PropTypes.node,
};
