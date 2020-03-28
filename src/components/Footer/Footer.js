/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {
  List,
  ListItem,
  Grid,
  Box,
  InputBase,
  IconButton,
  Paper,
  Divider
} from "@material-ui/core";
import logo from "../../assets/img/logorodape.png";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useStyles from "assets/jss/material-kit-react/components/footerStyle.js";
import { styled } from "@material-ui/styles";
import Button from "../CustomButtons/Button.js";

const MyArrow = styled(ArrowForwardIcon)({
  color: "white"
});

const Footer = props => {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <div>
      <Box p={3} style={{ backgroundColor: "#F9F9FF" }}></Box>
      <footer className={footerClasses}>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box mt={-7}>
                <img src={logo} alt="LOGO_FREUD" width="60%" />
              </Box>
              <Box mr={10} ml={10} className={classes.address}>
                Rua Barão do Rio Branco, Nº 1481 St. Central, Anápolis GO
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box pr={10} pl={10} mt={5}>
                <div className={classes.newsletter}>Newsletter</div>
                <div className={classes.descriptionNewsletter}>
                  Fique atualizado com as nossas últimas Notícias
                </div>
                <Box mt={2}>
                  <Paper component="form" className={classes.root}>
                    <InputBase
                      className={classes.input}
                      placeholder="Envie seu Email"
                      inputProps={{ "aria-label": "envie email" }}
                    />
                    <Divider
                      className={classes.divider}
                      orientation="vertical"
                    />
                    <IconButton
                      color="primary"
                      className={classes.iconButton}
                      aria-label="directions"
                    >
                      <MyArrow />
                    </IconButton>
                  </Paper>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box ml={10} mr={10} mt={5} mb={5} className={classes.copyright}>
                ©2020 Casa Freud | Desenvolvido por Nathalia Cecílio e Lucas
                Hannani
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box pr={10} pl={10} mt={2} align="right">
                <Button justIcon color="facebook">
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button justIcon color="facebook">
                  <i className={classes.socials + " fab fa-facebook-square"} />
                </Button>
                <Button justIcon color="facebook">
                  <i className={classes.socials + " fab fa-whatsapp"} />
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
  whiteFont: PropTypes.bool
};

export default Footer;
