/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button href="/" color="transparent" className={classes.navLink}>
          Home
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/quem-somos"
          color="transparent"
          className={classes.navLink}
        >
          Quem somos
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Serviços oferecidos"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/servicos-oferecidos" className={classes.dropdownLink}>
              Serviços oferecidos
            </Link>
            // <a
            //   href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   Documentation
            // </a>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/agenda" color="transparent" className={classes.navLink}>
          Agenda
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/clinica" color="transparent" className={classes.navLink}>
          Clínica
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/contato" color="transparent" className={classes.navLink}>
          Contato
        </Button>
      </ListItem>
    </List>
  );
}
