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
import SectionCourses from "components/SectionCourses/SectionCourses.js";
import SectionGallery from "./Sections/SectionGallery.js";
import SectionEvaluation from "components/SectionEvalutation/SectionEvaluation.js";
const useStyles = makeStyles(styles);

export default function Components(props) {
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
      <Parallax image={require("assets/img/bg4.jpg")} home>
        <div className={classes.container}>{/* <SectionCarousel /> */}</div>
      </Parallax>

      <div className={classNames(classes.main)}>
        <SectionFeatures />
        <SectionCourses />
        <SectionGallery />
        <SectionEvaluation />
        {/* <SectionBasics />
        <SectionNavbars />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload /> */}
      </div>
      <Footer />
    </div>
  );
}
