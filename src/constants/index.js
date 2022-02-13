import React from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import Work from "@material-ui/icons/Work";
import Search from "@material-ui/icons/Search";
import Profile from '@material-ui/icons/SupervisedUserCircle'

export const colorSet = {
  applied: "#3454D1",
  shortlisted: "#DC851F",
  accepted: "#09BC8A",
  rejected: "#D1345B",
  deleted: "#B49A67",
  cancelled: "#FF8484",
  finished: "#4EA5D9",
};

export const APPLICANT_DASHBOARD_ITEMS = {
  Dashboard: {
    title: "Dashboard",
    url: "/dashboard/",
    icon: (props) => <Dashboard {...props} />,
  },
  Application: {
    title: "Applications",
    url: "/dashboard/applications",
    icon: (props) => <Work {...props} />,
  },
  Search:{
    title:'Search',
    url:'/dashboard/search',
    icon: (props) => <Search {...props} />,

  },
  Profile:{
    title:'Profile',
    url:'/dashboard/profile',
    icon: (props) => <Profile {...props} />,

  }
};
