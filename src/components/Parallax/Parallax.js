import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from 'assets/jss/material-kit-react/components/parallaxStyle.js';
import logo from 'assets/img/logorcabeca.png';
import { Box } from '@material-ui/core';
const useStyles = makeStyles(styles);

const Parallax = props => {
  // let windowScrollTop;
  // if (window.innerWidth >= 768) {
  //   windowScrollTop = window.pageYOffset / 3;
  // } else {
  //   windowScrollTop = 0;
  // }
  // const [transform, setTransform] = React.useState(
  //   "translate3d(0," + windowScrollTop + "px,0)"
  // );
  // React.useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     window.addEventListener("scroll", resetTransform);
  //   }
  //   return function cleanup() {
  //     if (window.innerWidth >= 768) {
  //       window.removeEventListener("scroll", resetTransform);
  //     }
  //   };
  // });
  // const resetTransform = () => {
  //   var windowScrollTop = window.pageYOffset;
  //   setTransform("translate3d(0," + windowScrollTop + "px,0)");
  // };
  const { filter, className, children, style, image, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined,
  });
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        height: props.home ? '100vh' : '400px',
        backgroundImage: 'url(' + image + ')',
        backgroundAttachment: props.home ? 'fixed' : 'initial',
        backgroundPosition: props.home ? 'center center' : '50% 30%',
        // transform: transform
      }}
    >
      <div style={{ display: 'block' }}>
        <div className={classes.container}>
          <Box mt={14}>
            <img alt="logo" src={logo} />
          </Box>
        </div>
      </div>
      <div style={{ display: 'flex' }}>{children}</div>
    </div>
  );
};

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};

export default Parallax;
