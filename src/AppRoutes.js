import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTE_PATHS } from "./common/constants";

import Home from "./screens/home/Home";
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

const AppRoutes = (props) => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route
            exact
            path={ROUTE_PATHS.HOME}
            component={(props) => <Home {...props} />}
          />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
};

export default AppRoutes;
