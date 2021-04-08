import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from 'react-router-dom';
const Title = styled.p`
  color: #fff;
  text-align: center;
  font-size: 45px;
  font-weight: 400;
  font-style: italic;
  line-height: 1;
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

const StyledHome = styled.a`
  cursor: pointer;
  color: #005aaa;

  :hover {
    color: #005aaa;
  }
`;

const TitlePage = ({ title }) => {
  const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title>{title}</Title>
        <Breadcrumbs>
          <StyledHome onClick={() => history.push('/')}>Home</StyledHome> <Icon /> {title}
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
};

export default TitlePage;
