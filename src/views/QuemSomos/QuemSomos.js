import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionFeatures from "../../components/SectionFeatures/SectionFeatures";
import styles from "assets/jss/material-kit-react/views/components.js";
import TitlePage from "components/TitlePage/TitlePage";
import ImageText from "components/ImageText/ImageText";
import { WHO_WE_ARE } from "../../quem-somos-data";
const useStyles = makeStyles(styles);

const QuemSomos = props => {
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
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        style={{ height: "45vh" }}
        image={require("assets/img/bg4.jpg")}
      >
        <TitlePage title="Quem somos" />
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionFeatures />
        <ImageText title={WHO_WE_ARE.title} image={WHO_WE_ARE.image}>
          {WHO_WE_ARE.description}
        </ImageText>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
