import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ROUTE_PATHS } from "./common/constants";

import Home from "./screens/home/Home";

const AppRoutes = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path={ROUTE_PATHS.HOME}
            component={(props) => <Home {...props} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoutes;
