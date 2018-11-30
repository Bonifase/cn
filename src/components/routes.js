import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";


const routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/welcome" component={Welcome} />
     
    </Switch>
  );
};

export default routes;