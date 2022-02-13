import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../home";
import Profile from "../../Profile";
import { ErrorPage } from "../../Welcome";
import Applications from "../applications";

function ApplicantRoutes() {
  return (
    <Switch>
      <Route exact path={"/dashboard/"}>
        <MainPage />
      </Route>
      <Route path={"/dashboard/applications"}>
        <Applications />
      </Route>
      <Route exact path="/dashboard/search">
        <Home />
      </Route>
      <Route exact path="/dashboard/profile">
        <Profile />
      </Route>

      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

const MainPage = () => {
  return <div>Main Page</div>;
};

export default ApplicantRoutes;
