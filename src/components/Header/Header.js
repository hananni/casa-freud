import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import { headerStyle, HEADER_LOGO_SIZE } from 'assets/jss/material-kit-react/components/headerStyle.js';
import { Box, Grid } from '@material-ui/core';
import styled from 'styled-components';

const useStyles = makeStyles(headerStyle);

const LogoHeader = styled(Box)`
  width: 100%;
  position: fixed;
  height: ${HEADER_LOGO_SIZE}px;
  background-color: #0c1536;
  z-index: 1200;
`;

const LogoIcon = styled.i`
  margin: 5px 10px;
  color: #fff;
`;

const KnowMore = styled.div`
  width: 80%;
  color: #fff;
  background-image: -webkit-linear-gradient(-225deg, #005aaa 100px, #ffffff00 10%);
  height: ${HEADER_LOGO_SIZE}px;
  text-align: right;
  padding-right: 10px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
  padding-top: 10px;
  float: right;
`;

const Header = props => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
      document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
      document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;
  return (
    <>
      <LogoHeader>
        <div className={classes.container} style={{ paddingRight: 0, height: HEADER_LOGO_SIZE }}>
          <Grid container alignItems="center">
            <Grid xs={4} item>
              <LogoIcon className={'fab fa-instagram'} />
              <LogoIcon className={'fab fa-facebook-square'} />
              <LogoIcon className={'fab fa-whatsapp'} />
            </Grid>
            <Grid xs={8} item>
              <KnowMore>ÁREA DO ALUNO</KnowMore>
            </Grid>
          </Grid>
        </div>
      </LogoHeader>
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {/* {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )} */}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={'right'}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    </>
  );
};

Header.defaultProp = {
  color: 'white',
};

Header.propTypes = {
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark'])
      .isRequired,
  }),
};

export default Header;
