import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import Parallax from 'components/Parallax/Parallax.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import styles from 'assets/jss/material-kit-react/views/components.js';
import TitlePage from 'components/TitlePage/TitlePage';
import SectionContato from './Sections/SectionContato';

const useStyles = makeStyles(styles);

const Contato = props => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax image={require('assets/img/bg4.jpg')}>
        <TitlePage title="Contato" />
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionContato />
      </div>
      <Footer />
    </div>
  );
};

export default Contato;
