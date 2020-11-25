import React from "react";
import SectionFeatures from "../../components/SectionFeatures/SectionFeatures";
import TitlePage from "components/TitlePage/TitlePage";
import ImageText from "components/ImageText/ImageText";
import { WHO_WE_ARE, GOALS } from "../../quem-somos-data";
import SectionProfessors from "./Sections/SectionProfessors";
import Layout from "views/Layout";

const getParallaxContent = () => {
  return (
    <TitlePage title="Quem somos" />
  )
}


const QuemSomos = () => {
  return (
    <Layout parallaxContent={getParallaxContent()}>
      <SectionFeatures />
      <ImageText title={WHO_WE_ARE.title} image={WHO_WE_ARE.image}>
        {WHO_WE_ARE.description}
      </ImageText>
      <SectionProfessors />
      <ImageText title={GOALS.title} image={GOALS.image} rightImage noPaddingBottom>
        {GOALS.description}
      </ImageText>
    </Layout>
  );
};

export default QuemSomos;
