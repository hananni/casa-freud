import React from "react";
import SectionFeatures from "../../components/SectionFeatures/SectionFeatures";
import TitlePage from "components/TitlePage/TitlePage";
import SectionServices from "./Sections/SectionServices";
import SectionLibrary from "./Sections/SectionLibrary";
import SectionWorkGroup from "./Sections/SectionWorkGroup";
import Layout from "views/Layout";

const ServicosOferecidos = () => {
  return (
    <Layout parallaxContent={<TitlePage title="Serviços oferecidos" />}>
      <SectionFeatures ids={[1, 3, 4]} />
      <SectionServices />
      <SectionLibrary />
      <SectionWorkGroup />
    </Layout>
  );
};

export default ServicosOferecidos;
