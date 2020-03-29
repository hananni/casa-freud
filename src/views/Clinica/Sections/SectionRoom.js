import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid, Box, Typography } from "@material-ui/core";
import TitleFreud from "components/Typography/TitleFreud";
import room from "assets/img/room.jpg";
import styled from "styled-components";

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
        <div className={classes.container} style={{ display: "grid" }}>
          <Box m={4}>
            <TitleFreud title="Parceiro Saúde - Clínica escola" center />
          </Box>
          <Box mb={5}>
            <Typography align="center">
              É simplesmente uma simulação de texto da indústria tipográfica e
              de impressos
            </Typography>
          </Box>
          <Grid container>
            <Grid item xs={12}>
              <img src={room} width="100%" />
            </Grid>
            <Grid item xs={12}>
              <WhiteField>
                É simplesmente uma simulação de texto da indústria tipográfica e
                de impressos. É simplesmente uma simulação de texto da indústria
                tipográfica e de impressos. É simplesmente uma simulação de
                texto.
                <Box mt={10}>
                  <TitleFreud
                    title="Especialidades"
                    center
                    marginBottom="25px"
                  />
                  É simplesmente uma simulação de texto da indústria tipográfica
                  e de impressos. É simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos. É simplesmente uma
                  simulação de texto
                </Box>
                <Box mt={10}>
                  <TitleFreud
                    title="Profissionais parceiros"
                    center
                    marginBottom="25px"
                  />
                  É simplesmente uma simulação de texto da indústria tipográfica
                  e de impressos. É simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos. É simplesmente uma
                  simulação de texto
                </Box>
                <Box mt={10}>
                  <TitleFreud
                    title="Horário de Funcionamento"
                    center
                    marginBottom="25px"
                  />
                  É simplesmente uma simulação de texto da indústria tipográfica
                  e de impressos. É simplesmente uma simulação de texto da
                  indústria tipográfica e de impressos. É simplesmente uma
                  simulação de texto
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
