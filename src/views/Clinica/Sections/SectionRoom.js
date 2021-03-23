import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import { Grid, Box } from '@material-ui/core';
import TitleFreud from 'components/Typography/TitleFreud';
import room from 'assets/img/bg9.jpg';
import styled from 'styled-components';

const useStyles = makeStyles(styles);

const WhiteField = styled.div`
  background-color: #fff
  padding: 40px;
  text-align: center;
`;

const SectionRoom = () => {
  const classes = useStyles();

  return (
    <Box pt={5}>
      <div className={classes.section}>
        <div className={classes.container} style={{ display: 'grid' }}>
          <Box m={4}>
            <TitleFreud title="Clínica escola" center />
          </Box>
          <Box mt={2} mb={5}>
            Os atendimentos em nossa Clínica Escola de Psicanálise são realizados pelos alunos do último ano do Curso de
            Formação em Psicanálise da Casa Freud. Sabendo que o custo padrão de um tratamento psicanalítico é
            convencionalmente alto, o que pode ser um dos grandes empecilhos para que a população em geral não tenha
            acesso à psicanálise, a Casa Freud busca afastar-se dessa regra tendo como objetivo fornecer o atendimento
            psicanalítico clínico individual e gratuito. O atendimento da Clínica Escola Casa Freud está disponível
            apenas para maiores de 18 anos e acontece de forma presencial na sede da instituição. Interessados devem
            entrar em contato para realizar a entrevista de triagem e iniciar os atendimentos.
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <img alt="room" src={room} width="100%" />
            </Grid>
            <Grid item xs={12}>
              <WhiteField>
                <Box mt={10}>
                  <TitleFreud title="Atendimento Pscicanalítico " center marginBottom="25px" />A terapia psicanalítica,
                  é realizada por profissionais que oferecem uma escuta singular, atende às mais variadas manifestações
                  de sofrimento emocional. O psicanalista acolhe e busca compreender as fontes de angústia e dor, na
                  maneira particular que se apresentam para cada pessoa. Este trabalho promove a expansão do
                  autoconhecimento e contribui para cuidar do sofrimento psíquico gerado na história de cada um.
                </Box>
                <Box mt={10}>
                  <TitleFreud title="Atendimento Psicológico" center marginBottom="25px" />O atendimento psicológico tem
                  a finalidade de tratar questões de cada sujeito em sua singularidade, assuntos relacionados a seus
                  sentimentos, acontecimentos de sua vida cotidiana, de seu passado, presente, de seus sonhos e desejos.
                  O psicólogo ajuda o paciente a falar sobre seus problemas e a lidar melhor com momentos de
                  dificuldades e sofrimentos.
                </Box>
                <Box mt={10}>
                  <TitleFreud title="Avaliação Psicológica" center marginBottom="25px" />A avaliação psicológica é
                  realizada por psicólogos. São realizadas entrevistas, observações e aplicações de testes psicológicos.
                  O resultado desta avaliação é fornecido através da elaboração de um laudo psicológico que busca
                  atender os propósitos estabelecidos na demanda inicial, podendo estar relacionado a avaliação das
                  condições psicológicas para realização de cirurgias como bariátrica e vasectomia, avaliação para
                  concursos públicos ou processos de admissão, avaliação para fins judiciais, principalmente processos
                  na esfera do direito de família e criminal.
                </Box>
              </WhiteField>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
};

export default SectionRoom;
