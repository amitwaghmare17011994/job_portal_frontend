import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Flex from "../../../atoms/Flex";
import { Bold, H4Bold, H5 } from "../../../atoms/Text";
import { useStyles } from "./style";
import { APPLICANT_DASHBOARD_ITEMS } from "../../../constants";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.sideBar}>
      <Flex direction="column">
        <H4Bold>Hi,</H4Bold>
        <H5>Amit Waghmare</H5>
      </Flex>
      <Flex direction="column" top={30}>
        {Object.values(APPLICANT_DASHBOARD_ITEMS).map(
          ({ title, icon, url }) => {
            return (
              <Flex
                key={url}
                style={{ cursor: "pointer" }}
                top={20}
                onClick={() => {
                  history.push(url);
                }}
              >
                {icon({ style: { color: "white", marginRight: 10 } })}
                <Bold>{title}</Bold>
              </Flex>
            );
          }
        )}
      </Flex>
    </div>
  );
}

export default Sidebar;
