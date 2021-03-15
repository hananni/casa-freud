import React from 'react';
import classNames from 'classnames';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Parallax from 'components/Parallax/Parallax.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import styles from 'assets/jss/material-kit-react/views/components.js';
import { makeStyles } from '@material-ui/core';
import GoToTop from 'components/GoToTop/GoToTop';

const useStyles = makeStyles(styles);

const Layout = ({ headerHeight = 400, children, isHome = false, parallaxContent }) => {
  const classes = useStyles();
  return (
    <div>
      <GoToTop />
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 20,
          color: 'white',
        }}
      />
      <Parallax image={require('assets/img/bg4.jpg')} home={isHome}>
        {parallaxContent}
      </Parallax>

      <div className={classNames(classes.main)}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
