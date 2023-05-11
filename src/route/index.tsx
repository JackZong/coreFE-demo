import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { Main } from "../module/main";
import { Product } from "../module/product";
import { NotFound } from "../widget/NotFound";
import { app } from "core-fe/src/app";
import { Dashboard } from "../module/dashboard";
// import { Product2 } from "../module/product2";
import { async } from "core-fe";

// product2页面使用懒加载
const Product2 = async(() => import("../module/product2"), "Product2");

const RouterComp: React.FC<any> = () => {
  return (
    <Router history={app.browserHistory}>
      <Switch>
        <Redirect exact path="/" to="/welcome" />
        <Route exact path="/welcome" component={Dashboard} />
        <Route exact path="/product/list" component={Product} />
        <Route exact path="/product/list2" component={Product2} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export { RouterComp };
