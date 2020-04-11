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
import SectionActivities from "./Sections/SectionActivities";
import SectionEvaluation from "components/SectionEvalutation/SectionEvaluation";

const useStyles = makeStyles(styles);

const Agenda = props => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <TitlePage title="Agenda" />
      </Parallax>
      <div className={classNames(classes.main)}>
        <SectionFeatures />
        <SectionActivities />
        <SectionEvaluation />
      </div>
      <Footer />
    </div>
  );
};

export default Agenda;
