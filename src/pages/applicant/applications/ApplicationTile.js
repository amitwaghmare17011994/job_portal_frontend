import {
  Chip,
  Grid,
  makeStyles, Paper,
  Typography
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useContext, useState } from "react";
import { SetPopupContext } from "../../../App";
import Flex from "../../../atoms/Flex";
import { colorSet } from "../../../constants";
import {
  getRating,
  updateRating
} from "../../../services/applicationsPageServices";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  statusBlock: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ApplicationTile = (props) => {
  const classes = useStyles();
  const { application } = props;
  const setPopup = useContext(SetPopupContext);
  const [rating, setRating] = useState(application.job.rating);

  const appliedOn = new Date(application.dateOfApplication);
  const joinedOn = new Date(application.dateOfJoining);

  const fetchRating = async () => {
    try {
      const ratingResponse = await getRating(application);
      setRating(ratingResponse);
    } catch (err) {
      setPopup({
        open: true,
        severity: "error",
        message: "Error",
      });
    }
  };

  const changeRating = async (ratingValue) => {
    try {
      await updateRating({ rating: ratingValue, application });
      setPopup({
        open: true,
        severity: "success",
        message: "Rating updated successfully",
      });
      fetchRating();
    } catch (error) {
      if (error?.response?.data?.message) {
        setPopup({
          open: true,
          severity: "error",
          message: error?.response?.data?.message,
        });
      }
      fetchRating();
    }
  };

  return (
    <Paper className={classes.jobTileOuter} elevation={3}>
      <Grid container>
        <Grid container item xs={12} spacing={1} direction="column">
          <Flex>
            <Flex flex={1}>
              <Typography variant="h5">{application.job.title}</Typography>
            </Flex>
            <Chip
              label={application.status}
              className={classes.statusBlock}
              style={{
                background: colorSet[application.status],
                color: "#ffffff",
              }}
            />
          </Flex>

          <Flex justifyContent={"space-between"} top={20}>
            <Flex>Posted By: {application.recruiter.name}</Flex>
            <Flex>Role : {application.job.jobType}</Flex>
            <Flex>Salary : &#8377; {application.job.salary} per month</Flex>
            <Flex>
              Duration : &nbsp;
              {application.job.duration !== 0
                ? `${application.job.duration} month`
                : `Flexible`}
            </Flex>

            <Flex>Applied On: {appliedOn.toLocaleDateString()}</Flex>
            <>
              {application.status === "accepted" ||
              application.status === "finished" ? (
                <Flex item>Joined On: {joinedOn.toLocaleDateString()}</Flex>
              ) : null}
            </>
          </Flex>

          <Flex top={20}>
            {application.job.skillsets.map((skill) => (
              <Chip key={skill} label={skill} style={{ marginRight: "2px" }} />
            ))}
          </Flex>
        </Grid>
        <Flex top={20}>
          {(application.status === "accepted" ||
            application.status === "finished") && (
            <Rating
              name="simple-controlled"
              style={{ marginBottom: "30px" }}
              value={rating === -1 ? null : rating}
              onChange={(event, newValue) => {
                setRating(newValue)
                changeRating(newValue);
              }}
            />
          )}
        </Flex>
      </Grid>
    </Paper>
  );
};
export default ApplicationTile;
