import React from 'react';
import TitlePage from 'components/TitlePage/TitlePage';
import SectionContato from './Sections/SectionContato';
import Layout from 'views/Layout';

const getParallaxContent = () => {
  return <TitlePage title="Contato" />;
};

const Contato = props => {
  return (
    <Layout parallaxContent={getParallaxContent()}>
      <SectionContato />
    </Layout>
  );
};

export default Contato;
