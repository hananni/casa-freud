/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid, Box, InputBase, IconButton, Paper, Divider } from '@material-ui/core';
import logo from '../../assets/img/logorodape.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import useStyles from 'assets/jss/material-kit-react/components/footerStyle.js';
import { styled as mstyled } from '@material-ui/styles';
import Button from '../CustomButtons/Button.js';
import styled from 'styled-components';
import { devices } from 'responsive';

const MyArrow = mstyled(ArrowForwardIcon)({
  color: 'white',
});

const LogoContainer = styled.div`
  margin-top: -56px;
  img {
    width: 300px;
  }

  @media ${devices.xsMax} {
    margin-top: -40px;
    img {
      width: 200px;
    }
  }
`;

const Spacing = styled.div`
  ${props => props.marginTop && `margin-top: ${props.marginTop}px`};
  @media ${devices.sm} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const Footer = props => {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <div>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <LogoContainer>
                <img src={logo} alt="LOGO_FREUD" width="60%" />
              </LogoContainer>
              <Spacing>
                Rua Barão do Rio Branco, Nº 1481 <br /> St. Central, Anápolis GO
              </Spacing>
            </Grid>
            <Grid item xs={12} md={6}>
              <Spacing marginTop={40}>
                <div className={classes.newsletter}>Newsletter</div>
                <div className={classes.descriptionNewsletter}>Fique atualizado com as nossas últimas Notícias</div>
                <Box mt={2}>
                  <Paper component="form" className={classes.root}>
                    <InputBase
                      className={classes.input}
                      placeholder="Envie seu Email"
                      inputProps={{ 'aria-label': 'envie email' }}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                      <MyArrow />
                    </IconButton>
                  </Paper>
                </Box>
              </Spacing>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box ml={10} mr={10} mt={5} mb={5} className={classes.copyright}>
                ©2021 Casa Freud | Desenvolvido por Nathalia Cecílio e Lucas Hannani
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box pr={10} pl={10} mt={5} align="right">
                <Button justIcon color="facebook" size={'sm'}>
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button justIcon color="facebook" size={'sm'}>
                  <i className={classes.socials + ' fab fa-whatsapp'} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};

export default Footer;
