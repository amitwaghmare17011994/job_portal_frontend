import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Flex from "../../../atoms/Flex";
import { Bold, H4Bold, H5 } from "../../../atoms/Text";
import { APPLICANT_DASHBOARD_ITEMS } from "../../../constants";
import { useStyles, Container } from "./style";
import Logout from "@mui/icons-material/LogoutOutlined";
import MenuItem from "./MenuItem";
// import Logout from '@mui/icons'
function Sidebar() {
  const [selectedPath, setSelectedPath] = useState();
  const classes = useStyles();
  const history = useHistory();
  const {
    location: { pathname },
  } = history;
  useEffect(() => {
    setSelectedPath(pathname);
  }, [pathname]);

  return (
    <Container className={classes.sideBar}>
      <Flex direction="column">
        <H4Bold>Hi,</H4Bold>
        <H5>Amit Waghmare</H5>
      </Flex>
      <Flex direction="column" top={30}>
        {Object.values(APPLICANT_DASHBOARD_ITEMS).map(
          (item, index) => {
            const { url } = item;
            const isSelectedOption = url === selectedPath;

            return (
              <MenuItem
                {...item}
                classes={classes}
                isSelectedOption={isSelectedOption}
                onClick={() => {
                  setSelectedPath(url);
                  history.push(url);
                }}
              />
            );
          }
        )}
        <Flex
          key={"/logout"}
          style={{ cursor: "pointer" }}
          top={20}
          onClick={() => {
            history.push("/logout");
          }}
          flex={1}
          className={classes.menuItem}
        >
          <Logout style={{ color: "white", marginRight: 10 }} />
          {/* {icon({ style: { color: "white", marginRight: 10 } })} */}
          <Bold>Logout</Bold>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Sidebar;
