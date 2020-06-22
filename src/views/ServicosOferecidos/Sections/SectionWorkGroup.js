import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Grid, Box, Typography } from "@material-ui/core";
import gruposdetrabalho from "assets/img/gruposdetrabalho.jpg";
import styled from "styled-components";
import TitleFreud from "components/Typography/TitleFreud";

const useStyles = makeStyles(styles);

const WorkGroupBackground = styled.div`
  background-image: url(${gruposdetrabalho});
  height: 400px;
  background-size: cover;
  background-position: center center;
`;
const KnowMore = styled.div`
  width: 80%;
  color: #fff;
  background-image: -webkit-linear-gradient(-45deg, #005aaa 90%, #ffffff00 10%);
  text-align: right;
  padding-right: 180px;
  font-size: 13px;
  font-weight: 500;
  font-style: italic;
`;

const SectionWorkGroup = () => {
  const classes = useStyles();

  return (
    <Box pb={5}>
      <WorkGroupBackground>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={4}>
              <Box pt={5}>
                <TitleFreud
                  soft
                  color="#fff"
                  title={"Grupos de Trabalho"}
                  fontStyle={"italic"}
                  right
                />
              </Box>
              <Typography style={{ color: "#fff", fontSize: "14px", fontWeight: "200", lineHeight: "1.3", paddingTop: "10px" }} align="right">
                É simplesmente uma simulação <br /> de texto da indústria <br /> tipográfica e
                de impressos.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </WorkGroupBackground>
      <KnowMore>LEIA MAIS</KnowMore>
    </Box>
  );
};

export default SectionWorkGroup;
