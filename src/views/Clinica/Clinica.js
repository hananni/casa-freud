import React from 'react';
import SectionFeatures from '../../components/SectionFeatures/SectionFeatures';
import TitlePage from 'components/TitlePage/TitlePage';
import SectionRoom from './Sections/SectionRoom';
import SectionEvaluation from 'components/SectionEvalutation/SectionEvaluation';
import Layout from 'views/Layout';

import SectionProfissionais from './Sections/SectionProfissionais';

const getParallaxContent = () => {
  return <TitlePage title="Clínica" />;
};
const Clinica = props => {
  return (
    <Layout parallaxContent={getParallaxContent()}>
      <SectionFeatures ids={[1, 2, 4]} />
      <SectionRoom />
      <SectionProfissionais />
      <SectionEvaluation noMarginTop />
    </Layout>
  );
};

export default Clinica;
