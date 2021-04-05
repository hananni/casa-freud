import React from 'react';
import SectionFeatures from '../../components/SectionFeatures/SectionFeatures';
import TitlePage from 'components/TitlePage/TitlePage';
import SectionActivities from './Sections/SectionActivities';
import SectionEvaluation from 'components/SectionEvalutation/SectionEvaluation';
import Layout from 'views/Layout';

const getParallaxContent = () => {
  return <TitlePage title="Dúvidas" />;
};
const Agenda = props => {
  return (
    <Layout parallaxContent={getParallaxContent()}>
      <SectionFeatures ids={[1, 3, 4]} />
      <SectionActivities />
      <SectionEvaluation />
    </Layout>
  );
};

export default Agenda;
