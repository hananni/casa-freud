import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Box, Typography, Grid } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import styled from 'styled-components';

const useStyles = makeStyles(styles);

const WhiteField = styled.div`
  background-color: #fff
  padding: 40px;
  text-align: center;
`;

const SectionActivities = () => {
  const classes = useStyles();

  return (
    <Box pt={5} pb={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Box m={4}>
            <TitleFreud title="Perguntas Frequentes" center />
          </Box>
          <Box mb={5}>
            <Typography align="center"></Typography>
          </Box>
          <Grid item xs={12}>
            <WhiteField>
              <Box mt={10}>
                <TitleFreud title="A quem se destina o curso de Formação em Psicanálise?" center marginBottom="25px" />A
                terapia psicanalítica, O curso de Formação em Psicanálise é destinado a todos os profissionais
                interessados em conhecer mais a respeito da psicanálise e aos que desejam dedicar-se à psicanálise,
                tanto no âmbito do consultório clínico quanto em outros contextos de atuação profissional.
              </Box>
              <Box mt={10}>
                <TitleFreud
                  title="Preciso ter uma graduação de nível superior em qual área para ingressar no curso de Formação em Psicanálise?"
                  center
                  marginBottom="25px"
                />
                O Para ingressar no curso de Formação em Psicanálise é necessário diploma de ensino superior,
                independente da área de formação.
              </Box>
              <Box mt={10}>
                <TitleFreud
                  title="O curso de Formação em Psicanálise é uma Pós-Graduação? Tem registro do MEC?"
                  center
                  marginBottom="25px"
                />
                Não. O curso de Formação em Psicanálise não se configura como especialização lato sensu ou strictu
                senso. O aluno, ao se formar, recebe o certificado expedido pela Casa Freud e pode atuar como
                psicanalista em todo o território nacional.
              </Box>
              <Box mt={10}>
                <TitleFreud title="Qual a duração do curso de Formação em Psicanálise?" center marginBottom="25px" />
                Nosso curso tem duração de 03 anos.
              </Box>
              <Box mt={10}>
                <TitleFreud title="O que faz um psicanalista?" center marginBottom="25px" />O psicanalista investiga o
                inconsciente. Na clínica o psicanalista se propõe a escutar o paciente, buscando compreende-lo em sua
                singularidade.
              </Box>
              <Box mt={10}>
                <TitleFreud title="Psicanalista é uma profissão?" center marginBottom="25px" />
                No Brasil a psicanálise é uma profissão exercida livremente, não é uma profissão regulamentada. É uma
                profissão livre que pode ser exercida em todo o país, amparada pelo decreto n°2.208 de 1977 e inscrita
                no CBO sob o código 2515.50.
              </Box>
              <Box mt={10}>
                <TitleFreud
                  title="O curso de Formação em Psicanálise me autoriza a clinicar?"
                  center
                  marginBottom="25px"
                />
                Sim, nosso curso permite que você estabeleça um consultório e exerça livremente a profissão de
                psicanalista no Brasil.
              </Box>
            </WhiteField>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionActivities;
