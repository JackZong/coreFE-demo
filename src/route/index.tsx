import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { Main } from "../module/main";
import { Product } from "../module/product";
import { NotFound } from "../widget/NotFound";
import { app } from "core-fe/src/app";
import { Dashboard } from "../module/dashboard";

const RouterComp: React.FC<any> = () => {
  return (
    <Router history={app.browserHistory}>
      <Switch>
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={Dashboard} />
        <Route exact path="/product/list" component={Product} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export { RouterComp };
