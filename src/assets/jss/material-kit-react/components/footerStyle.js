import { container, primaryColor } from "assets/jss/material-kit-react.js";
import { makeStyles } from "@material-ui/core/styles";

const footerStyle = makeStyles(theme => ({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    backgroundColor: "#0c1536",
    padding: "0.9375rem 0",
    // textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative",
    color: "#fff"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  },
  newsletter: {
    fontWeight: 600,
    fontSize: 17
  },
  descriptionNewsletter: {
    marginTop: 20,
    fontSize: 14,
    color: "#5b5d65"
  },
  root: {
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10,
    backgroundColor: "#005AAA",
    borderRadius: 0,
    padding: 15
  },
  divider: {
    height: 28,
    margin: 4
  },
  copyright: {
    fontSize: 11
  }
}));

export default footerStyle;
