import React, { Fragment } from 'react';
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Container } from "react-bootstrap";

import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "./Dashboard"


import { PageTitle } from '../../layout-components';
import { Grid } from '@material-ui/core';

import IconsMaterial from '../../example-components/Icons/IconsMaterial';
import IconsFontawesome from '../../example-components/Icons/IconsFontawesome';
import IconsPe7 from '../../example-components/Icons/IconsPe7';
export default function LoginButton() {
  return(
    
      <Fragment>
        <Container
        className="d-flex align-items-center justify-content-center" 
        style={{ minHeight: "100vh" }}
      >
        
          <Router>
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route  component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
      </Container>
        </Fragment>
    
  );
}
