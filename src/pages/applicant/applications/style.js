import { makeStyles } from "@material-ui/core";

 

export const useStyles = makeStyles((theme) => ({
    body: {
      height: "inherit",
    },
    statusBlock: {
      width: "100%",
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
  