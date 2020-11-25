import React from "react";
import SectionFeatures from "../../components/SectionFeatures/SectionFeatures";
import SectionCourses from "components/SectionCourses/SectionCourses.js";
import SectionGallery from "./Sections/SectionGallery.js";
import SectionEvaluation from "components/SectionEvalutation/SectionEvaluation.js";
import SlideHome from "./Sections/SlideHome";
import Layout from "views/Layout";

const getParallaxContent = () => {
  return (
    <SlideHome />
  )
}

const Home = () => {
  return (
    <Layout isHome headerHeight={650} parallaxContent={getParallaxContent()}>
      <SectionFeatures />
      <SectionCourses />
      <SectionGallery />
      <SectionEvaluation />
    </Layout>
  );
}

export default Home; 