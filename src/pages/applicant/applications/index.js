import {
    Grid, Typography
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { SetPopupContext } from "../../../App";
import { getApplications } from "../../../services/applicationsPageServices";
import ApplicationTile from "./ApplicationTile";
 
const Applications = (props) => {
  const setPopup = useContext(SetPopupContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const applicationsList = await getApplications();
       
      setApplications(applicationsList);
    } catch (error) {
      setApplications([]);
      setPopup({
        open: true,
        severity: "error",
        message: "Error",
      });
    }
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h3">Applications</Typography>
      
      </Grid>

      <Grid
        container
        item
        xs
        direction="column"
        style={{ width: "100%" }}
        alignItems="stretch"
        justify="center"
      >
        {applications.length > 0 ? (
          applications.map((obj) => (
            <Grid item key={obj._id}>
              <ApplicationTile application={obj} />
            </Grid>
          ))
        ) : (
          <Typography variant="h5" style={{ textAlign: "center" }}>
            No Applications Found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Applications;
