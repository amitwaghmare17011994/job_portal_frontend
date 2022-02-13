import React from "react";
import ApplicantRoutes from "./ApplicantRoutes";
import Sidebar from "./Sidebar";
import { useStyles } from "./style";

function ApplicantDashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Sidebar  />
      <div className={classes.ground}>
        <ApplicantRoutes />
      </div>
    </div>
  );
}

const MainPage = () => {
  return <div>Main Page</div>;
};

export default ApplicantDashboard;
