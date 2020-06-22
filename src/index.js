import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import QuemSomos from "views/QuemSomos/QuemSomos";
import ServicosOferecidos from "views/ServicosOferecidos/ServicosOferecidos";
import Agenda from "views/Agenda/Agenda";
import Clinica from "views/Clinica/Clinica";
import Contato from "views/Contato/Contato";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/quem-somos" component={QuemSomos} />
      <Route path="/servicos-oferecidos" component={ServicosOferecidos} />
      <Route path="/agenda" component={Agenda} />
      <Route path="/clinica" component={Clinica} />
      <Route path="/contato" component={Contato} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
