import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { userType } from "./lib/isAuth";
import ApplicantDashboard from "./pages/applicant/applicantDashboard";
import Applications from "./pages/applicant/applications";
import Home from "./pages/home/";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import AcceptedApplicants from "./pages/recruiter/AcceptedApplicants";
import CreateJobs from "./pages/recruiter/CreateJobs";
import JobApplications from "./pages/recruiter/JobApplications";
import MyJobs from "./pages/recruiter/MyJobs";
import RecruiterProfile from "./pages/recruiter/Profile";
import Signup from "./pages/Signup";
import Welcome, { ErrorPage } from "./pages/Welcome";

const Middleware = () => {
  return <Redirect to="/dashboard" />;
};

function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Middleware/>
      </Route>
      <Route path="/dashboard">
        {userType() === "recruiter" ? <Welcome /> : <ApplicantDashboard />}
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
       

      <Route exact path="/profile">
        {userType() === "recruiter" ? <RecruiterProfile /> : <Profile />}
      </Route>
      <Route exact path="/addjob">
        <CreateJobs />
      </Route>
      <Route exact path="/myjobs">
        <MyJobs />
      </Route>
      <Route exact path="/job/applications/:jobId">
        <JobApplications />
      </Route>
      <Route exact path="/employees">
        <AcceptedApplicants />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default Routes;
