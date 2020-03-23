import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "assets/jss/material-kit-react/components/typographyStyle.js";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const Title = styled.p`
  color: ${props => props.color};
  font-style: ${props => props.fontStyle};
  font-size: 35px;
  font-weight: ${props => (props.soft ? "400" : "600")};

  text-align: ${props =>
    props.center ? "center" : props.right ? "right" : "left"};
`;

const useStyles = makeStyles(styles);

export default function TitleFreud({
  title,
  children,
  soft,
  center,
  right,
  color = "#000",
  fontStyle = "normal"
}) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Title
          soft={soft}
          center={center}
          color={color}
          fontStyle={fontStyle}
          right={right}
        >
          {title}
        </Title>
      </Grid>
    </Grid>
  );
}

TitleFreud.propTypes = {
  children: PropTypes.node
};
